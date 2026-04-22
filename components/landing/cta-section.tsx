import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  const router = useRouter();
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <div className="p-10 md:p-14 bg-gradient-to-br from-primary/5 via-primary/8 to-primary/5 border border-primary/20 rounded-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          Ready to Clean Up Your AWS?
        </h2>
        <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          Start optimizing your cloud infrastructure today. No credit card
          required.
        </p>
        <Button
          size="lg"
          onClick={() => router.push("/register")}
          className="h-12 px-8 text-base shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 gap-2"
        >
          Get Started for Free
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
