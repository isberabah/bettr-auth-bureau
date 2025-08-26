"use client";

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth-client";
import { toast } from "sonner";
import { useState } from "react";

export const SignOutButton = () => {
  const [isPanding, setIsPanding] = useState(false);

  const router = useRouter();

  async function handelClick() {
    await signOut({
      fetchOptions: {
        onRequest: () => {
          setIsPanding(true);
        },
        onResponse: () => {
          setIsPanding(false);
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
        onSuccess: () => {
          toast.success("You've log out i see soon")
          router.push("/auth/login");
        },
      },
    });
  }
  return (
    <Button
      onClick={handelClick}
      size={"sm"}
      variant={"destructive"}
      disabled={isPanding}
    >
      Sign Out
    </Button>
  );
};
