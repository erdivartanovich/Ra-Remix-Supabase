// in app/routes/admin/api/$.tsx
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import proxyUrl from "./proxyUrl";

// handle read requests (getOne, getList, getMany, getManyReference)
export const loader: LoaderFunction = ({ request }) => {
  const apiUrl = proxyUrl(request.url);
  return fetch(apiUrl, {
    headers: {
      prefer: request.headers.get("prefer") ?? "",
      accept: request.headers.get("accept") ?? "application/json",
      apiKey: `${process.env.SUPABASE_SERVICE_ROLE}`,
      Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE}`,
    },
  });
};

// handle write requests (create, update, delete, updateMany, deleteMany)
export const action: ActionFunction = ({ request }) => {
  const apiUrl = proxyUrl(request.url);
  return fetch(apiUrl, {
    method: request.method,
    body: request.body,
    headers: {
      prefer: request.headers.get("prefer") ?? "",
      accept: request.headers.get("accept") ?? "application/json",
      apiKey: `${process.env.SUPABASE_SERVICE_ROLE}`,
      Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE}`,
    },
  });
};
