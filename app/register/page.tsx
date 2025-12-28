import { RegisterForm } from "@/components/register-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Register - Zombie Cleaner",
  description: "Create your Zombie Cleaner account",
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-foreground mb-2">Zombie Cleaner</h1>
          <p className="text-sm text-muted-foreground">Create an account to get started</p>
        </div>
        <RegisterForm />
      </div>
    </div>
  )
}
