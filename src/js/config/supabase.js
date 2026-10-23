// VidyaSetu Supabase Client & Connection Configuration
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
  supabaseAnonKey &&
  supabaseUrl.trim() !== '' &&
  supabaseAnonKey.trim() !== '' &&
  !supabaseUrl.includes('your-project')
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    })
  : null;

export function getConnectionStatus() {
  if (isSupabaseConfigured) {
    return {
      mode: 'supabase',
      label: 'Connected to Supabase PostgreSQL',
      isLive: true,
      url: supabaseUrl,
    };
  }
  return {
    mode: 'local_offline',
    label: 'Local Educational Offline Mode (IndexedDB Active)',
    isLive: false,
    url: null,
  };
}
