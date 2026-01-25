"use client"
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const HeroSection = () => {
  const router = useRouter();
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border mb-6">
        <Trash2 className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">
          AWS Resource Management
        </span>
      </div>

      <h1 className="text-2xl md:text-5xl font-bold text-foreground mb-6 text-balance">
        Clean Up Your AWS Environments Automatically
      </h1>

      <p className="md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
        Zombie Cleaner helps you identify and remove unused AWS resources across
        multiple environments. Save costs, improve security, and keep your
        infrastructure clean.
      </p>

      <Button
        size="lg"
        onClick={() => router.push("/register")}
        className="h-12 px-8 text-base"
      >
        Get Started
      </Button>
    </section>
  );
};

export default HeroSection;
