import { ActionFunction, json, LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = ({}) => {
  return new Response("Can Not GET");
};

export const action: ActionFunction = ({ request }) => {
  const { url } = request;
  console.log("===== action", url);
  return json({
    message: "success",
  });
};
