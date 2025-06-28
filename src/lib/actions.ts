"use server";

import { headers } from "next/headers";
import { supabase } from "@/lib/supabase";
import { waitlistSchema, type WaitlistFormData } from "@/lib/validations";
import type { WaitlistEntry } from "@/lib/supabase";

export interface ActionResult {
  success: boolean;
  message: string;
  position?: number;
}

export async function submitWaitlist(
  formData: WaitlistFormData,
  source: string = "hero"
): Promise<ActionResult> {
  try {
    // Validate form data
    const validatedData = waitlistSchema.parse(formData);

    // Get request headers for tracking
    const headersList = await headers();
    const userAgent = headersList.get("user-agent") || undefined;
    const forwardedFor = headersList.get("x-forwarded-for");
    const realIp = headersList.get("x-real-ip");
    const ipAddress = forwardedFor?.split(",")[0] || realIp || undefined;

    // Get UTM parameters from referer or could be passed as parameters
    const referer = headersList.get("referer");
    const url = referer ? new URL(referer) : null;
    const utmSource = url?.searchParams.get("utm_source") || undefined;
    const utmMedium = url?.searchParams.get("utm_medium") || undefined;
    const utmCampaign = url?.searchParams.get("utm_campaign") || undefined;

    // Prepare waitlist entry
    const waitlistEntry: Omit<
      WaitlistEntry,
      "id" | "created_at" | "updated_at"
    > = {
      email: validatedData.email,
      source,
      user_agent: userAgent,
      ip_address: ipAddress,
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
      status: "pending",
    };

    // Insert into Supabase
    const { error } = await supabase
      .from("waitlist")
      .insert([waitlistEntry])
      .select("id")
      .single();

    if (error) {
      // Handle duplicate email error
      if (error.code === "23505") {
        return {
          success: false,
          message:
            "This email is already on the waitlist. Check your inbox for updates!",
        };
      }

      console.error("Supabase error:", error);
      return {
        success: false,
        message: "Failed to join waitlist. Please try again.",
      };
    }

    // Get waitlist position
    const { data: positionData } = await supabase.rpc("get_waitlist_position", {
      user_email: validatedData.email,
    });

    return {
      success: true,
      message:
        "Successfully joined the waitlist! Check your email for updates.",
      position: positionData || undefined,
    };
  } catch (error) {
    console.error("Action error:", error);

    if (error instanceof Error) {
      return {
        success: false,
        message: error.message,
      };
    }

    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    };
  }
}

// Server action wrapper for form submissions
export async function submitWaitlistAction(
  prevState: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  const email = formData.get("email") as string;
  const source = (formData.get("source") as string) || "hero";

  return submitWaitlist({ email }, source);
}

// Get waitlist analytics (admin only)
export async function getWaitlistAnalytics() {
  try {
    const { data, error } = await supabase
      .from("waitlist_analytics")
      .select("*")
      .order("signup_date", { ascending: false })
      .limit(30);

    if (error) {
      console.error("Analytics error:", error);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Analytics error:", error);
    return null;
  }
}

// Get total waitlist count
export async function getWaitlistCount(): Promise<number> {
  try {
    const { count, error } = await supabase
      .from("waitlist")
      .select("*", { count: "exact", head: true })
      .eq("status", "pending");

    if (error) {
      console.error("Count error:", error);
      return 0;
    }

    return count || 0;
  } catch (error) {
    console.error("Count error:", error);
    return 0;
  }
}
