"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  CheckCircle2,
  Cloud,
  Trash2,
  Server,
  Database,
  FunctionSquare,
  Clock,
  PaintBucket,
} from "lucide-react";
import Link from "next/link";
import { useEnvironments } from "@/hooks/use-environments";
import BackButton from "../ui/back-button";

interface EnvironmentDetailProps {
  environmentId: string;
}

export function EnvironmentDetail({ environmentId }: EnvironmentDetailProps) {
  const { environments } = useEnvironments();
  const environment = environments.find((env) => env.id === environmentId);

  const resources = [
    {
      label: "EC2 Instances",
      value: "5",
      icon: <Server className="h-4 w-4 text-muted-foreground/60" />,
    },
    {
      label: "RDS Databases",
      value: "2",
      icon: <Database className="h-4 w-4 text-muted-foreground/60" />,
    },
    {
      label: "S3 Buckets",
      value: "12",
      icon: <PaintBucket className="h-4 w-4 text-muted-foreground/60" />,
    },
  ];

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
        {/* Environment Info */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base font-semibold">
              Environment Information
            </CardTitle>
            <CardDescription>
              Basic configuration and connection details
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="divide-y divide-border">
              <InfoRow label="Environment Name" value={environment.name} />
              <InfoRow label="AWS Role ARN" value={environment.roleArn} mono />
              <InfoRow
                label="Connection Status"
                value="Connected"
                icon={<CheckCircle2 className="h-4 w-4 text-emerald-500" />}
              />
              {environment.description && (
                <InfoRow label="Description" value={environment.description} />
              )}
            </div>
          </CardContent>
        </Card>

        {/* Resources Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-semibold flex items-center gap-2">
              <Cloud className="h-4 w-4 text-primary" />
              Resources
            </CardTitle>
            <CardDescription>Detected AWS resource types</CardDescription>
          </CardHeader>

          <CardContent className="space-y-3">
            {resources.map((resource) => (
              <ResourceStat
                key={resource.label}
                label={resource.label}
                value={resource.value}
                icon={resource.icon}
              />
            ))}

            <div className="pt-4 border-t border-border/50">
              <Link href={`/environment/${environmentId}/discovery`}>
                <Button variant="outline" className="w-full gap-2 text-sm">
                  View Full Discovery
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Zombie Resources */}
        <Card className="lg:col-span-3 border-dashed">
          <CardHeader>
            <CardTitle className="text-base font-semibold flex items-center gap-2">
              <Trash2 className="h-4 w-4 text-destructive/70" />
              Zombie Resources
            </CardTitle>
            <CardDescription>
              Unused resources detected in this environment
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex flex-col items-center justify-center py-12 text-center gap-3 bg-muted/20 rounded-lg border border-dashed border-border/60">
              <div className="h-10 w-10 rounded-full bg-muted/50 flex items-center justify-center">
                <Trash2 className="h-5 w-5 text-muted-foreground/50" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  No zombie resources detected yet
                </p>
                <p className="text-xs text-muted-foreground/70 mt-1">
                  Automated scanning and cleanup rules will be available in the
                  next phase.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

/* ---------- Small UI Helpers ---------- */

function InfoRow({
  label,
  value,
  icon,
  mono,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
  mono?: boolean;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 py-3 first:pt-0 last:pb-0">
      <p className="text-sm text-muted-foreground shrink-0">{label}</p>
      <div
        className={`text-sm font-medium sm:text-right ${
          mono ? "font-mono text-xs break-all text-foreground/70" : ""
        }`}
      >
        <span className="inline-flex items-center gap-1.5">
          {icon}
          {value}
        </span>
      </div>
    </div>
  );
}

function ResourceStat({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-muted-foreground flex items-center gap-2">
        {icon}
        {label}
      </span>
      <span className="font-medium text-foreground/80">{value}</span>
    </div>
  );
}
// </div>
//   );
// }
