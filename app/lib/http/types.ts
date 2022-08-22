import { Cookie } from "@remix-run/node";

export type IResponseWithCookieParam = {
  status: number;
  payload: Record<string, any>;
  cookie: Cookie;
  cookiePayload: Record<string, any>;
};
