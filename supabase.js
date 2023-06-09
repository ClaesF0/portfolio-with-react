import { createClient } from "@supabase/supabase-js";

console.log(
  "import.meta.env.VITE_CLAES_PORTFOLIO_SUPABASE_KEY",
  import.meta.env.VITE_CLAES_PORTFOLIO_SUPABASE_KEY
);

const supabaseKey = import.meta.env.VITE_CLAES_PORTFOLIO_SUPABASE_KEY;
const supabaseUrl = import.meta.env.VITE_CLAES_PORTFOLIO_SUPABASE_URL;

const supabase = createClient(supabaseUrl, supabaseKey);
console.log("supabase FRA SUPABASE", supabase);

export default supabase;
