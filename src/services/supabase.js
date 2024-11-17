import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database

export const supabaseUrl="https://wdhbdrkpankbadkwwnml.supabase.co";
const 
supabaseKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkaGJkcmtwYW5rYmFka3d3bm1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkxNTM0NzcsImV4cCI6MjA0NDcyOTQ3N30.jaL1L0Z0-eXPubQV3v4QsvJxNYWqToZQvr2X7bhxYbM";
        
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;