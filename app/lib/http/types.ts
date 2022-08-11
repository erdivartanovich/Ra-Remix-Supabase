import { Cookie } from "@remix-run/node";

export type IResponseWithCookieParam = {
  payload: Record<string, any>;
  cookie: Cookie;
  cookiePayload: Record<string, any>;
};
