import supabase from "../supabaseClient";
import { ISignInWithEmailParams, IUpdateUserParams } from "./types";

export const setAuth = (accessToken: string) => {
  return supabase.auth.setAuth(accessToken);
};

export const getUser = async (accessToken: string) => {
  return await supabase.auth.api.getUser(accessToken);
};

export const signUp = async ({ email, password }: ISignInWithEmailParams) => {
  return await supabase.auth.signUp({
    email,
    password,
  });
};

export const signInWithEmail = async ({
  email,
  password,
}: ISignInWithEmailParams) => {
  return await supabase.auth.signIn({
    email,
    password,
  });
};

export const signOut = async (token: string) => {
  return await supabase.auth.api.signOut(token);
};

export const updateUser = async ({ token, ...payload }: IUpdateUserParams) => {
  return await supabase.auth.api.updateUser(token, {
    ...payload,
  });
};
