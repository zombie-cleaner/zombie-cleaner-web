"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useEnvironments } from "@/hooks/use-environments";
import { MOCK_ZOMBIE_RESOURCES } from "@/lib/mock-data";
import type { ZombieResource } from "@/types/environment";
import BackButton from "../ui/back-button";
import { EnvironmentInfoCard } from "./environment-info-card";
import { ResourcesSummaryCard } from "./resources-summary-card";
import { ZombieResourcesCard } from "./zombie-resources-card";

interface EnvironmentDetailProps {
  environmentId: string;
}

export function EnvironmentDetail({ environmentId }: EnvironmentDetailProps) {
  const { environments } = useEnvironments();
  const environment = environments.find((env) => env.id === environmentId);

  const zombieResources: ZombieResource[] =
    MOCK_ZOMBIE_RESOURCES[environmentId] ?? [];

  if (!environment) {
    return (
      <div className="space-y-4">
        <Link href="/dashboard">
          <BackButton prevPage="dashboard" />
        </Link>

        <Card>
          <CardHeader>
            <CardTitle>Environment not found</CardTitle>
            <CardDescription>
              The environment you&apos;re looking for doesn&apos;t exist.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Back */}
      <Link href="/dashboard">
        <BackButton prevPage="dashboard" />
      </Link>

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            {environment.name}
          </h1>
          <p className="text-muted-foreground mt-1">
            Environment details and resource management
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 w-fit">
          <CheckCircle2 className="h-3.5 w-3.5" />
          Connected
        </span>
      </div>

      {/* Main Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        <EnvironmentInfoCard environment={environment} />
        <ResourcesSummaryCard environmentId={environmentId} />
        <ZombieResourcesCard zombieResources={zombieResources} />
      </div>
    </div>
  );
}
