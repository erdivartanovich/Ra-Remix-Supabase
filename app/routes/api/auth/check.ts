import { json, LoaderFunction } from "@remix-run/node";
import { actionNotAllowed } from "~/lib/http/notAllowed";
import { parseAuth } from "~/lib/http/parseAuth";

// const getModuleReferer = (request: Request) => {
//   const referer = request.headers.get("referer") as string;
//   if (referer) {
//     const { pathname } = new URL(request.headers.get("referer") as string);
//     return pathname.split("/")?.[1];
//   } else {
//     return "";
//   }
// };

export const loader: LoaderFunction = async ({ request }) => {
  const accessToken = await parseAuth(request);
  const error = !accessToken;

  return json(
    { error },
    {
      status: 200,
    }
  );
};

export const action = actionNotAllowed;
