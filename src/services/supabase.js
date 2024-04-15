import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://chspznlmkdzdcnhjfcgh.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNoc3B6bmxta2R6ZGNuaGpmY2doIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxNzI2NDcsImV4cCI6MjAyODc0ODY0N30.3xbVt1MGy0mI6mnLlS5A3SLPatBTx8zMpZisjOSsvTY"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase