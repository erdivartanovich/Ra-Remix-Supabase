import { ActionFunction, redirect } from "@remix-run/node";
import { useParams } from "@remix-run/react";
import { useEffect, useState } from "react";
import { updateUser } from "~/lib/supabase/auth";

export const action: ActionFunction = async ({ request }) => {
  const url = new URL(request.url);
  const redirectTo = url.searchParams.get("redirectTo");
  const accessToken = url.searchParams.get("accessToken");
  console.log("TOKEN IS ", accessToken);
  const form = await request.formData();
  const newPassword = form.get("new_password") as string;
  const result = await updateUser({
    token: accessToken!,
    password: newPassword,
  });
  console.log("UPDATE RESULT", result);
  return redirect(`${redirectTo}`);
};

/* https://roohlswxczfyzjdhgfbx.supabase.co/auth/v1/verify?token=053a&type=invite&redirect_to=http://localhost:3000/me/change-password */
/* http://localhost:3000/me/change-password#access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjYwMTUwMzU5LCJzdWIiOiJiYjUwNzYzMi1jZjhlLTQ1MDMtYTg5Zi1mOGVmZjExOTMzOWMiLCJlbWFpbCI6ImVyZGl2YXJ0YW5vdmljaEBnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7fSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQifQ.5avUduL0QF9ri-iBJn2BdU6NH6UnDiJbviP4NC1nT9A&expires_in=3600&refresh_token=X3b7Cvs5nhxEyyDKRu1ISA&token_type=bearer&type=invite */
/* 123456789A** */
export default function ChangePassword() {
  const { redirectTo } = useParams<{
    redirectTo: string;
  }>();
  const [token, setToken] = useState<string>();
  useEffect(() => {
    const hash = window?.location.hash;
    const accessToken = hash?.split("&")?.[0]?.split("=")?.[1];
    setToken(accessToken);
  }, []);

  const redirectUrl = redirectTo || "/me/123";
  return (
    <form
      method="post"
      action={`/me/change-password?accessToken=${token}&redirectTo=${redirectUrl}`}
    >
      <p>
        <label>
          User Name: <input name="name" type="text" />
        </label>
      </p>
      <p>
        <label>
          New Password: <input name="new_password" type="text" />
        </label>
      </p>
      <p>
        <label>
          Confirm New Password:{" "}
          <input name="confirm_new_password" type="text" />
        </label>
      </p>
      <p>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}
