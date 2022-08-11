import { createClient } from "@supabase/supabase-js";

console.log(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_ROLE!);
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_ROLE!
);

export default supabase;
