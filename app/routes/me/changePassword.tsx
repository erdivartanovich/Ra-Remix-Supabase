import { useParams } from "@remix-run/react";
import { useEffect, useState } from "react";

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
      action={`/api/auth/changePassword?accessToken=${token}&redirectTo=${redirectUrl}`}
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
