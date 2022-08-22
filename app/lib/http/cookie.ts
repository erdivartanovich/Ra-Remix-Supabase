import { Cookie, createCookie as createNewCookie, json } from "@remix-run/node";
import { env } from "process";
import { IResponseWithCookieParam } from "./types";

export const createCookie = (cookieName: string): Cookie => {
  return createNewCookie(cookieName, {
    //domain: example.com //TODO: specify this if you want to use subdomain deployment strategy
    path: "/",
    sameSite: "lax",
    httpOnly: true,
    secure: true,
    maxAge: parseInt(env.COOKIE_MAX_AGE || "604800"),
  });
};

export const parseCookieFromHeader = async (
  request: Request,
  cookieName: string
) => {
  const cookieHeader = request.headers.get("Cookie");
  const cookie = createCookie(cookieName);
  const cookiePayload = (await cookie.parse(cookieHeader)) || {};
  return { cookie, cookiePayload };
};

export const jsonWithCookie = async ({
  status = 200,
  payload,
  cookie,
  cookiePayload,
}: IResponseWithCookieParam) => {
  return json(payload, {
    status,
    headers: {
      "Set-Cookie": await cookie.serialize(cookiePayload),
    },
  });
};
