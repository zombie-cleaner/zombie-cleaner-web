"use client";
import { Trash2, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export function HeroSection() {
  const router = useRouter();
  return (
    <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-8">
        <Trash2 className="h-3.5 w-3.5 text-primary" />
        <span className="text-sm font-medium text-primary">
          AWS Resource Management
        </span>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight text-balance leading-[1.1]">
        Clean Up Your AWS
        <br />
        <span className="text-primary">Environments Automatically</span>
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
        Identify and remove unused AWS resources across multiple environments.
        Save costs, improve security, and keep your infrastructure clean.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Button
          size="lg"
          onClick={() => router.push("/register")}
          className="h-12 px-8 text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 gap-2"
        >
          Get Started
          <ArrowRight className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={() => router.push("/login")}
          className="h-12 px-8 text-base"
        >
          Log in
        </Button>
      </div>
    </section>
  );
}
