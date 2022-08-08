import supabase from "../supabaseClient";

export const signInWithEmail = async (email: string, password: string) => {
  const { user, error } = await supabase.auth.signIn({
    email,
    password,
  });
  return { user, error };
};
