import { useEffect } from "react";

export default function Me() {
  useEffect(() => {
    const checkAuth = async () => {
      const resp = await fetch("/api/auth/check").then((resp) => resp.json());
      console.log("check Auth =====", resp);
    };
    checkAuth();
  }, []);

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
