import { LoginForm } from "@/components/login-form"
import type { Metadata } from "next"
import { config } from "@/config"
export const metadata: Metadata = {
  title: `Login - ${config.appName}`,
  description: `Login to your ${config.appName} account`,
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">{config.appName}</h1>
          <p className="text-sm text-muted-foreground">Manage your unused AWS resources</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
