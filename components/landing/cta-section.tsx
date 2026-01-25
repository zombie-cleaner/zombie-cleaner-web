import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

const CtaSection = () => {
    const router = useRouter();
  return (
    <div>
       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className=" p-12 bg-card">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Clean Up Your AWS?</h2>
          <p className="md:text-lg text-muted-foreground mb-8">
            Start optimizing your cloud infrastructure today. No credit card required.
          </p>
          <Button size="lg" onClick={() => router.push("/register")} className="h-12 px-8 text-base">
            Get Started for Free
          </Button>
        </div>
      </section>
    </div>
  )
}

export default CtaSection
