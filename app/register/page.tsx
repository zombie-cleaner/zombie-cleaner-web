import { RegisterForm } from "@/components/auth/register-form"
import { config } from "@/config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: `Register - ${config.appName}`,
  description: `Create your ${config.appName} account`,
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-foreground mb-2">{config.appName}</h1>
          <p className="text-sm text-muted-foreground">Create an account to get started</p>
        </div>
        <RegisterForm />
      </div>
    </div>
  )
}
