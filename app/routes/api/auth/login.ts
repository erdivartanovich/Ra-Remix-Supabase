import { ActionFunction } from "@remix-run/node";
import { jsonWithCookie, parseCookieFromHeader } from "~/lib/http/cookie";
import { loaderNotAllowed } from "~/lib/http/notAllowed";
import { signInWithEmail } from "~/lib/supabase/auth";

export const loader = loaderNotAllowed;

export const action: ActionFunction = async ({ request }) => {
  const { username, password } = await request.json();
  const { cookie, cookiePayload } = await parseCookieFromHeader(
    request,
    "auth"
  );
  const { user, session, error } = await signInWithEmail({
    email: username,
    password,
  });
  console.log(user);
  console.log(session);
  console.log(session?.access_token);

  cookiePayload.accessToken = session?.access_token;
  cookiePayload.maxAge = session?.expires_in;

  return jsonWithCookie({
    status: session?.access_token ? 200 : 401,
    payload: { user, error },
    cookie,
    cookiePayload,
  });
};
