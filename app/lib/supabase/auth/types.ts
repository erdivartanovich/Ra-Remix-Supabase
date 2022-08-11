import { ApiError, Session, User } from "@supabase/supabase-js";

export type IAuthLoginParams = {
  username: string;
  password: string;
};

export type IAuthCheckErrorParams = {
  message: string;
  status: number;
  body: Object;
};

export type IAuthIdentity = {
  id: string | number;
  fullName?: string;
  avatar?: string;
};

export type IAuthPermissions = Object | Array<any>;

export type ISigninSuccessResponse = {
  user: User | null;
  error: ApiError | null;
  session: Session | null;
};

export type ISignInWithEmailParams = {
  email: string;
  password: string;
};

export type IUpdateUserParams = {
  token: string;
  [key: string]: any;
};
