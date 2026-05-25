import { RegisterForm } from "@/components/auth/register-form";
import { config } from "@/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Register - ${config.appName}`,
  description: `Create your ${config.appName} account`,
};

export default function RegisterPage() {
  return <RegisterForm />;
}
