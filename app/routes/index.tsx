import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { requireUserSession } from "~/core/session.server";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export const loader: LoaderFunction = async ({ request }) => {
  const session = await requireUserSession(request);
  return !!session;
};

export default function IndexRoute() {
  return <div>Hello Index Route</div>;
}
