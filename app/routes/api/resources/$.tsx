// in app/routes/admin/api/$.tsx
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { parseCookieFromHeader } from "~/lib/http/cookie";
import proxyUrl from "./proxyUrl";

// handle read requests (getOne, getList, getMany, getManyReference)
export const loader: LoaderFunction = async ({ request }) => {
  const apiUrl = proxyUrl(request.url);
  const { cookiePayload } = await parseCookieFromHeader(request, "auth");
  const accessToken = cookiePayload.accessToken;
  console.log("API ACCESS TOKEN ==============", accessToken);
  return fetch(apiUrl!, {
    headers: {
      prefer: request.headers.get("prefer") ?? "",
      accept: request.headers.get("accept") ?? "application/json",
      apiKey: `${process.env.SUPABASE_ANON_ROLE}`,
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

// handle write requests (create, update, delete, updateMany, deleteMany)
export const action: ActionFunction = async ({ request }) => {
  const apiUrl = proxyUrl(request.url);
  const { cookiePayload } = await parseCookieFromHeader(request, "auth");
  const accessToken = cookiePayload.accessToken;
  return fetch(apiUrl!, {
    method: request.method,
    body: request.body,
    headers: {
      prefer: request.headers.get("prefer") ?? "",
      accept: request.headers.get("accept") ?? "application/json",
      apiKey: `${process.env.SUPABASE_ANON_ROLE}`,
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
