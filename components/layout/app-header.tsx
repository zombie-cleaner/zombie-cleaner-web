"use client";

import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { config } from "@/config";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function AppHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isLanding = pathname === "/";

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur-md ${
        isLanding
          ? "border-border/50 bg-background/80"
          : "border-border bg-card/80 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <span className="text-xl font-semibold tracking-tight text-foreground flex items-center gap-2">
            <Image
              src="/4ugV301.svg"
              alt="Logo"
              width={28}
              height={28}
            />
            {config.appName}
          </span>
        </Link>

        <nav className="flex items-center gap-3">
          {isLanding ? (
            <>
              {isLoggedIn ? (
                <Button
                  size="sm"
                  onClick={() => router.push("/dashboard")}
                >
                  Dashboard
                </Button>
              ) : (
                <>
                  <Link href="/login">
                    <Button variant="ghost" size="sm">
                      Log in
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button size="sm">
                      Get Started
                    </Button>
                  </Link>
                </>
              )}
            </>
          ) : (
            isLoggedIn && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="gap-2"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
