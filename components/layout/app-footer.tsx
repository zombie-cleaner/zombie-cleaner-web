"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { config } from "@/config";

export function AppFooter() {
  const pathname = usePathname();

  // Pages where footer should not be shown (same as header)
  const hiddenPages = ["/login", "/register"];

  // Don't show footer on login or register pages
  if (hiddenPages.includes(pathname)) {
    return null;
  }

  return (
    <footer className="border-t border-border bg-muted/30 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-base font-semibold text-foreground mb-2">
              {config.appName}
            </h3>
            <p className="text-sm text-muted-foreground">
              Identify and manage unused AWS resources efficiently
            </p>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {config.appName}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Twitter
            </Link>
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              GitHub
            </Link>
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
