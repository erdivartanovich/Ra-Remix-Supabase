import { json, LinksFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { IUser } from "~/core/models/User";
import { getUser, requireUserSession } from "~/core/session.server";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserSession(request);
  const user = await getUser(request);
  return json(user);
};

export default function IndexRoute() {
  const user = useLoaderData<IUser>();
  return <div>Hello {user.username}</div>;
}
