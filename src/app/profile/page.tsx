import { RetournButton } from "@/components/return-button";
import { SignOutButton } from "@/components/sign-out-button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import React from "react";

export default async function Page() {


  const session = await auth.api.getSession({
    headers:  await headers(),
  });
  if (!session) redirect('/auth/login');
  else
  return (
    <div className="px-8 py-16 container max-w-screen-lg mx-auto  space-y-8">
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Profile : {session.user.name}</h1>
      </div>
      <div className="flex justify-between">
        <RetournButton label="Back" href="/" />
      <SignOutButton />  
      </div>
    
      <pre className="text-sm overflow-clip">
        {JSON.stringify(session, null, 2)}
      </pre>
    </div>
  );
}


