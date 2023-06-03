import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = "https://aggipclpsyhtxohfyzay.supabase.co" ;
const supabaseKey = process.env.SUPABASE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnZ2lwY2xwc3lodHhvaGZ5emF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUxOTczNjEsImV4cCI6MjAwMDc3MzM2MX0.2Qw8Qq74qdYpxIMLRydft1Pi537l3ezEXC2JUqLD4aQ";
export const supabase = createClient(supabaseUrl, supabaseKey);
