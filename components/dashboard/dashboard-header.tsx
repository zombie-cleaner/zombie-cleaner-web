"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { config } from "@/config";
import Image from "next/image";
import Link from "next/link";

export function DashboardHeader() {
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl font-bold text-foreground flex items-center">
            <Image
              src="/4ugV301.svg"
              alt="Logo"
              color="black"
              width={32}
              height={32}
              className="mr-2"
            />
            {config.appName}
          </h1>
        </Link>
        <Button
          className="font-bold"
          variant="ghost"
          size="sm"
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </header>
  );
}
