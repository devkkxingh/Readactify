"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { waitlistSchema, type WaitlistFormData } from "@/lib/validations";
import { submitWaitlist, type ActionResult } from "@/lib/actions";

export function useWaitlistForm(source: string = "hero") {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<ActionResult | null>(null);

  const form = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: WaitlistFormData) => {
    startTransition(async () => {
      try {
        const result = await submitWaitlist(data, source);
        setResult(result);

        if (result.success) {
          form.reset();
        }
      } catch {
        setResult({
          success: false,
          message: "An unexpected error occurred. Please try again.",
        });
      }
    });
  };

  const clearResult = () => {
    setResult(null);
  };

  return {
    form,
    onSubmit,
    isPending,
    result,
    clearResult,
    isSubmitting: isPending,
  };
}
