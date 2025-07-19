import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://iyqnxorztpaltmyobseu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5cW54b3J6dHBhbHRteW9ic2V1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2ODA2NTIsImV4cCI6MjA2ODI1NjY1Mn0.Ff-St54zMoBhyykbdLoyJxgaQrU-2zwFDrWUAvjjWng";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
