import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://helmgrpgdzvuklgljzpy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhlbG1ncnBnZHp2dWtsZ2xqenB5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE5MjAxMTYsImV4cCI6MjAwNzQ5NjExNn0.J0PGQVD_oG9TiqA6XD_dR-WJ0ZlaM1q5bxzNwJnHcbo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
