"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormField } from "@/components/ui/form-field";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export function RegisterForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate registration
    setTimeout(() => {
      // Mock registration - redirect to login
      router.push("/login");
    }, 800);
  };

  return (
    <Card className="border-border shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Register</CardTitle>
        <CardDescription>Create a new account to get started</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <FormField
            id="name"
            label="Name"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={isLoading}
          />
          <FormField
            id="email"
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
          />
          <FormField
            id="password"
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isLoading}
          />
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button
            type="submit"
            className="w-full shadow-md hover:shadow-lg transition-shadow"
            disabled={isLoading}
          >
            {isLoading ? "Creating account..." : "Register"}
          </Button>
          <p className="text-sm text-muted-foreground text-center">
            {"Already have an account? "}
            <Link
              href="/login"
              className="text-foreground hover:underline font-medium"
            >
              Login
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
}
