// lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cciypmugbemibaeuppco.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjaXlwbXVnYmVtaWJhZXVwcGNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1NzE3NjEsImV4cCI6MjA0MjE0Nzc2MX0.Jz6v2Akm17_xtPw14w6RaaPV4oQ-dEGpqJhJxEd2BCo';

export const supabase = createClient(supabaseUrl, supabaseKey);
