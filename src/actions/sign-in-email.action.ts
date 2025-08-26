"use server";

import { auth, ErrorCode } from "@/lib/auth";
import { APIError } from "better-auth/api";

export async function SignInEmailAction(formData: FormData) {
  const email = formData.get("email") as string;
  if (!email) return { error: "Please enter your email" };

  const password = formData.get("password") as string;
  if (!password) return { error: "Please enter your password" };
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });

    return { error: null };
  } catch (err) {
    if (err instanceof APIError) {
      return { error: err.message };
    }
    return { error: "Internel Server Error" };
  }
}
