"use client";

import { useEffect, useState } from "react";
import { SectionBreaker } from "../ui/section-breaker";
import { HeroSection } from "./hero-section";
import { FeaturesSection } from "./features-section";
import { CtaSection } from "./cta-section";

export function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      <SectionBreaker />

      {/* Features Section */}
      <FeaturesSection />

      <SectionBreaker />

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
}
