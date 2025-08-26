import { LoginForm } from "@/components/login-form";
import { RetournButton } from "@/components/return-button";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="px-8 py-16 container max-w-screen-lg mx-auto  space-y-8">
      <div className="space-y-8">
        <RetournButton href="/" label="Home" />
        <h1 className="text-3xl font-bold">Login</h1>
      </div>
      <LoginForm />
      <p className="text-muted-foreground text-sm">
        Don&apos;t have an account ?{" "}
        <Link href="/auth/register" className="hover:text-foreground">
          Register
        </Link>
      </p>
    </div>
  );
}
