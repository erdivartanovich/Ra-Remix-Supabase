import { ActionFunction, redirect } from "@remix-run/node";
import { updateUser } from "~/lib/supabase/auth";
export const action: ActionFunction = async ({ request }) => {
  const url = new URL(request.url);
  const redirectTo = url.searchParams.get("redirectTo");
  const accessToken = url.searchParams.get("accessToken");
  console.log("CHANGE PASSWORD TOKEN IS ===== ", accessToken);
  const form = await request.formData();
  const newPassword = form.get("new_password") as string;
  const result = await updateUser({
    token: accessToken!,
    password: newPassword,
  });
  console.log("UPDATE RESULT", result);
  return redirect(`${redirectTo}`);
};
