import { ActionFunction, LoaderFunction } from "@remix-run/node";
import { jsonWithCookie, parseCookieFromHeader } from "~/lib/http/cookie";
import { signInWithEmail } from "~/lib/supabase/auth";

export const loader: LoaderFunction = ({}) => {
  return new Response("METHOD NOT ALLOWED", { status: 405 });
};

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

  cookiePayload.accessToken = session?.access_token;

  return jsonWithCookie({
    payload: { user, error },
    cookie,
    cookiePayload,
  });
};
