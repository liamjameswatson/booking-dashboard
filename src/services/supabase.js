import { createClient } from "@supabase/supabase-js";


export const supabaseUrl = "https://pkxlpxkbjzxxaqlsslrn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBreGxweGtianp4eGFxbHNzbHJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc2NTkzNzMsImV4cCI6MjA5MzIzNTM3M30.yKEsiKEBM_k2Eqj3v6rCnai1CqnGYMUH3epfkvUGQlo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
