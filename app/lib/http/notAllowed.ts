import { ActionFunction, LoaderFunction } from "@remix-run/node";

export const loaderNotAllowed: LoaderFunction = ({}) => {
  return new Response("OPERATION NOT ALLOWED", { status: 405 });
};

export const actionNotAllowed: ActionFunction = async ({}) => {
  return new Response("OPERATION NOT ALLOWED", { status: 405 });
};
