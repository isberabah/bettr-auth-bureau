"use client";

import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { SignUpEmailAction } from "@/actions/sign-up-email.action";

export const RegisterForm = () => {

  const [isPanding, setIsPanding] = useState(false);

  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsPanding(true);

    const formData = new FormData(e.target as HTMLFormElement);

    const { error } = await SignUpEmailAction(formData);

    if (error) {
      toast.error(error);
    } else {
      toast.success("Registration complete. You're all set.!");
      router.push("/auth/login");
    }

    setIsPanding(false);
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-sm w-full space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" name="password" />
        </div>
        <Button type="submit" className="w-full" disabled={isPanding}>
          Regsister
        </Button>
      </form>
    </div>
  );
};
