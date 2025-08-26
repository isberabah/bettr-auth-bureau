import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";

interface RetournButtonProps {
  label: string;
  href: string;
}

export const RetournButton = (Props: RetournButtonProps) => {
  const { href, label } =Props;
  return (
    <Button size={"sm"} asChild>
      <Link href={href}>
        <ArrowLeftIcon /> {label}
      </Link>
    </Button>
  );
};
