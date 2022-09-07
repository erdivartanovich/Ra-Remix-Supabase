import { request } from "~/lib/http/request";
import {
  IAuthCheckErrorParams,
  IAuthIdentity,
  IAuthLoginParams,
  ISigninSuccessResponse,
} from "./types";
const authProvider = {
  login: async ({ username, password }: IAuthLoginParams) => {
    try {
      const { error } = (await request({
        method: "POST",
        path: "/api/auth/login",
        body: {
          username,
          password,
        },
      })) as ISigninSuccessResponse;
      if (error) return Promise.reject();
      return Promise.resolve();
    } catch {
      return Promise.reject();
    }
  },
  logout: async () => {
    const { error } = await request({
      method: "POST",
      path: "/api/auth/logout",
    });
    if (error) {
      throw error;
    }
  },
  checkAuth: async () => {
    const { error } = await request({ path: "/api/auth/check" });
    if (!!error) {
      throw new Error();
    }
    return Promise.resolve();
  },
  checkError: (error: IAuthCheckErrorParams) => {
    const status = error.status;
    if (status === 401) {
      return Promise.reject();
    }
    // other error code (404, 500, etc): no need to log out
    return Promise.resolve();
  },
  getIdentity: (): Promise<IAuthIdentity> =>
    /*
     * TODO: GET FROM DATABASE
     */
    Promise.resolve({
      id: "user",
      fullName: "John Doe",
    }),
  getPermissions: async (): Promise<any> => {
    const permissions = await request({
      path: "/api/resources/permissions?select=acl",
      headers: new Headers({ Accept: "application/vnd.pgrst.object+json" }),
    });
    return Promise.resolve(permissions);
  },
};

export default authProvider;
