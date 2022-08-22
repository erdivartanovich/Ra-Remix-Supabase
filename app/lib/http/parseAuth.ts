import { parseCookieFromHeader } from "./cookie";

export const parseAuth = async (request: Request) => {
  const { cookiePayload } = await parseCookieFromHeader(request, "auth");
  const { accessToken } = cookiePayload;
  console.log("CHECK ACCESS TOKEN ================", accessToken);
  return accessToken;
};
