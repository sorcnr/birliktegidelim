import { createClient } from '@supabase/supabase-js';
import { env } from '~/env.mjs';


// Initialize Supabase client
const supabaseUrl = "https://aggipclpsyhtxohfyzay.supabase.co" ;
const supabaseKey = env.SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
