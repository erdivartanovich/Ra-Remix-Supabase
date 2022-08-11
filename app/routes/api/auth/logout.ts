import { ActionFunction, LoaderFunction } from "@remix-run/node";
import { jsonWithCookie, parseCookieFromHeader } from "~/lib/http/cookie";
import { signOut } from "~/lib/supabase/auth";

export const loader: LoaderFunction = ({}) => {
  return new Response("METHOD NOT ALLOWED", { status: 405 });
};

export const action: ActionFunction = async ({ request }) => {
  const { cookie, cookiePayload } = await parseCookieFromHeader(
    request,
    "auth"
  );
  const { error } = cookiePayload.accessToken
    ? await signOut(cookiePayload.accessToken)
    : { error: null };
  cookiePayload.accessToken = null;
  return jsonWithCookie({
    payload: { error },
    cookie,
    cookiePayload,
  });
};
