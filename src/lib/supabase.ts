import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface WaitlistEntry {
  id?: string;
  email: string;
  source?: string;
  user_agent?: string;
  ip_address?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  created_at?: string;
  updated_at?: string;
  status?: "pending" | "invited" | "onboarded";
  position?: number;
  invited_at?: string;
  notes?: string;
}
