import { ActionFunction, json, LoaderFunction } from "@remix-run/node";
import { parseCookieFromHeader } from "~/lib/http/cookie";

export const loader: LoaderFunction = async ({ request }) => {
  const { cookiePayload } = await parseCookieFromHeader(request, "auth");
  const { accessToken } = cookiePayload;
  console.log("CHECK ACCESS TOKEN ================", accessToken);
  const error = !accessToken;
  return json(
    { error },
    {
      status: 200,
    }
  );
};

export const action: ActionFunction = async () => {
  return new Response("METHOD NOT ALLOWED", { status: 405 });
};
