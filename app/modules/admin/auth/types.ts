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
