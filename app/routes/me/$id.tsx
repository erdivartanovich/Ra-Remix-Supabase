import { LoaderFunction, redirect } from "@remix-run/node";
import { requireUserSession } from "~/core/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserSession(request);
  return true;
};

export default function Me() {
  return (
    <div>
      <p>Here's your hilarious joke:</p>
      <p>
        Why don't you find hippopotamuses hiding in trees? They're really good
        at it.
      </p>
    </div>
  );
}
