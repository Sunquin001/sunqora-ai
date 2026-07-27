const SUPABASE_URL = "https://wwvbinwrgbjuafiduedx.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_jNj3sEa3Y-jXET4jHXvwXg_gKcTJMrY";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

console.log("✅ Sunqora AI connected to Supabase");
