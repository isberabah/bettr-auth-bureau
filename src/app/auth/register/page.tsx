import { RegisterForm } from "@/components/register-form";
import { RetournButton } from "@/components/return-button";
import Link from "next/link";

const page = () => {
  return (
    <div className="px-8 py-16 container max-w-screen-lg mx-auto  space-y-8">
      <div className="space-y-8">
          <RetournButton href="/" label="Home" />
        <h1 className="text-3xl font-bold">Register</h1>
        <RegisterForm />

        <p className="text-muted-foreground text-sm">
        Already have an account ?{" "}
        <Link href="/auth/login" className="hover:text-foreground">
          Login
        </Link>
      </p>
      </div>
    </div>
  );
};

export default page;
