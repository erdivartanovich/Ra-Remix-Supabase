import { Cookie, createCookie as createNewCookie, json } from "@remix-run/node";
import { IResponseWithCookieParam } from "./types";

export const createCookie = (cookieName: string): Cookie =>
  createNewCookie(cookieName, {
    path: "/",
    sameSite: "lax",
    httpOnly: true,
    secure: true,
    maxAge: 2592000,
  });

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
  payload,
  cookie,
  cookiePayload,
}: IResponseWithCookieParam) => {
  return json(payload, {
    status: 200,
    headers: {
      "Set-Cookie": await cookie.serialize(cookiePayload),
    },
  });
};
