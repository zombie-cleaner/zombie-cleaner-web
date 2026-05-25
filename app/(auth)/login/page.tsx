import { LoginForm } from "@/components/auth/login-form";
import type { Metadata } from "next";
import { config } from "@/config";

export const metadata: Metadata = {
  title: `Login - ${config.appName}`,
  description: `Login to your ${config.appName} account`,
};

export default function LoginPage() {
  return <LoginForm />;
}
