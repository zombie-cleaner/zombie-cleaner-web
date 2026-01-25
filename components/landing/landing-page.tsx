"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Trash2, Shield, Zap } from "lucide-react"
import { DashboardHeader } from "../dashboard/dashboard-header"
import SectionBreaker from "../ui/section-breaker"
import HeroSection from "./hero-section"
import FeaturesSection from "./features-section"
import CtaSection from "./cta-section"

export function LandingPage() {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const user = sessionStorage.getItem("user")
    setIsLoggedIn(!!user)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection/>

      <SectionBreaker/>

      {/* Features Section */}
      <FeaturesSection/>

      <SectionBreaker/>

      {/* CTA Section */}
   <CtaSection/>
    </div>
  )
}
