"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cloud, Database, PaintBucket, Server } from "lucide-react";
import Link from "next/link";

interface ResourcesSummaryCardProps {
  environmentId: string;
}

const RESOURCES = [
  {
    label: "EC2 Instances",
    value: "5",
    icon: <Server className="h-4 w-4  " />,
  },
  {
    label: "RDS Databases",
    value: "2",
    icon: <Database className="h-4 w-4  " />,
  },
  {
    label: "S3 Buckets",
    value: "12",
    icon: <PaintBucket className="h-4 w-4  " />,
  },
];

export function ResourcesSummaryCard({
  environmentId,
}: ResourcesSummaryCardProps) {
  return (
    <Card className="border-violet-200 bg-violet-50/30">
      <CardHeader>
        <CardTitle className="text-base font-semibold flex items-center gap-2">
          <Cloud className="h-4 w-4 text-violet-600" />
          Resources
        </CardTitle>
        <CardDescription>Detected AWS resource types</CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        {RESOURCES.map((resource) => (
          <ResourceStat
            key={resource.label}
            label={resource.label}
            value={resource.value}
            icon={resource.icon}
          />
        ))}

        <div className="pt-4 border-t border-violet-200/50">
          <Link href={`/environment/${environmentId}/discovery`}>
            <Button
              variant="outline"
              className="w-full gap-2 text-sm border-gray-100  hover:bg-gray-200 "
            >
              View Full Discovery
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
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
