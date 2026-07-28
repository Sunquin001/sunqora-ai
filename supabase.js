
// ===============================
// SUNQORA AI - SUPABASE SETUP
// ===============================

// Your Supabase Project URL
const SUPABASE_URL = "https://wwvbinwrgbjuafiduedx.supabase.co";

// Your Supabase Publishable (Anon) Key
const SUPABASE_ANON_KEY =
"sb_publishable_jNj3sEa3Y-jXET4jHXvwXg_gKcTJMrY";

// Create Supabase client
const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

// Test connection
console.log("✅ Sunqora AI connected to Supabase");
