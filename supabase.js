import { createClient } from "@supabase/supabase-js";

const supabaseKey = import.meta.env.VITE_CLAES_PORTFOLIO_SUPABASE_KEY;
const supabaseUrl = import.meta.env.VITE_CLAES_PORTFOLIO_SUPABASE_URL;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
