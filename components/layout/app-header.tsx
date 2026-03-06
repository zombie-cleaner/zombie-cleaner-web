"use client";

import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut, Menu } from "lucide-react";
import { config } from "@/config";
import Link from "next/link";
import { useEffect, useState } from "react";

export function AppHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Pages where header should not be shown
  const hiddenPages = ["/login", "/register", "/"];

  useEffect(() => {
    // Check if user is logged in
    const user = sessionStorage.getItem("user");
    setIsLoggedIn(!!user);
    setIsLoading(false);
  }, []);

  // Don't show header on login, register, or landing page
  if (hiddenPages.includes(pathname)) {
    return null;
  }

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    router.push("/login");
  };

  if (isLoading) {
    return null;
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="transition-colors hover:opacity-80">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            {config.appName}
          </h1>
        </Link>

        <div className="flex items-center gap-4">
          {isLoggedIn && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="shadow-sm hover:shadow-md transition-all duration-200 gap-2"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
