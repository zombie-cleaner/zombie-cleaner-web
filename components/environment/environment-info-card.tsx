"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2, Info } from "lucide-react";
import type { AWSEnvironment } from "@/types/environment";

interface EnvironmentInfoCardProps {
  environment: AWSEnvironment;
}

export function EnvironmentInfoCard({ environment }: EnvironmentInfoCardProps) {
  return (
    <Card className="lg:col-span-2 border-sky-200 bg-sky-50/30">
      <CardHeader>
        <CardTitle className="text-base font-semibold flex items-center gap-2">
          <Info className="h-4 w-4 text-sky-600" />
          Environment Information
        </CardTitle>
        <CardDescription>
          Basic configuration and connection details
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="divide-y divide-sky-100">
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
  );
}

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
