"use client";

import { useSession } from "@/lib/auth-client";
import { Button } from "./ui/button";
import Link from "next/link";

export const GetStartedButton = () => {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <Button type="button" size={"lg"} className="opacity-50" asChild>
        Get Started
      </Button>
    );
  }

  const href = session ? "/profile" : "/auth/login";
  return (
    <div className="flex flex-col items-center gap-4">
      <Button type="button" size={"lg"} asChild>
        <Link href={href}>Get Started</Link>
      </Button>

      {session && (
        <p className=" flex items-center gap-2">
          <span
          data-role={session.user.role}
           className="size-4 rounded-full animate-pulse data-[role=USER]:bg-blue-600 data-[role=ADMIN]:bg-red-600"/>
           Welcome back ! {session.user.name}
        </p>
      )}
    </div>
  );
};
