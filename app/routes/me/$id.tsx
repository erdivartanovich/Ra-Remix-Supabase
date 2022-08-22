import { LoaderFunction, redirect } from "@remix-run/node";
import { parseAuth } from "~/lib/http/parseAuth";

export const loader: LoaderFunction = async ({ request }) => {
  if (!(await parseAuth(request))) {
    return redirect("/admin/login");
  }
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
