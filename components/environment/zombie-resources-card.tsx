"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle, Lightbulb, Trash2 } from "lucide-react";
import type { ZombieResource } from "@/types/environment";

interface ZombieResourcesCardProps {
  zombieResources: ZombieResource[];
}

export function ZombieResourcesCard({
  zombieResources,
}: ZombieResourcesCardProps) {
  return (
    <Card className="lg:col-span-3 border-red-200 bg-red-50/20">
      <CardHeader>
        <CardTitle className="text-base font-semibold flex items-center gap-2">
          <Trash2 className="h-4 w-4 text-red-500" />
          Zombie Resources
          {zombieResources.length > 0 && (
            <span className="ml-auto inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700 border border-red-300">
              {zombieResources.length} underutilised
            </span>
          )}
        </CardTitle>
        {zombieResources.length > 0 && (
          <CardDescription>
            These resources are underutilised. Review the metrics below and take
            action to optimise costs.
          </CardDescription>
        )}
      </CardHeader>

      <CardContent>
        {zombieResources.length > 0 ? (
          <div className="space-y-4">
            {zombieResources.map((resource) => (
              <ZombieResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center gap-3 bg-red-50/40 rounded-lg border border-dashed border-red-200">
            <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
              <Trash2 className="h-5 w-5 text-red-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-red-800">
                No zombie resources detected yet
              </p>
              <p className="text-xs text-red-600/70 mt-1">
                Automated scanning and cleanup rules will be available in the
                next phase.
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

/* ---------- Individual Zombie Resource Card ---------- */

function ZombieResourceCard({ resource }: { resource: ZombieResource }) {
  return (
    <div className="rounded-lg border border-red-200 bg-white p-4 space-y-3 shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center shrink-0">
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">
              {resource.resourceName}
            </p>
            <p className="text-xs text-muted-foreground">
              {resource.resourceType}
            </p>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="overflow-hidden rounded-md border border-red-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-red-50 border-b border-red-200">
              <th className="text-left px-3 py-2 text-xs font-semibold text-red-800 uppercase tracking-wider">
                Parameter
              </th>
              <th className="text-left px-3 py-2 text-xs font-semibold text-red-800 uppercase tracking-wider">
                Requested
              </th>
              <th className="text-left px-3 py-2 text-xs font-semibold text-red-800 uppercase tracking-wider">
                Actual
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-red-100">
              <td className="px-3 py-2.5 text-muted-foreground">
                {resource.parameterName}
              </td>
              <td className="px-3 py-2.5 font-medium text-emerald-700">
                {resource.requestedValue}
              </td>
              <td className="px-3 py-2.5 font-semibold text-red-600">
                {resource.actualValue}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Suggestion */}
      <div className="flex items-start gap-2 text-xs bg-amber-50 border border-amber-200 rounded-md px-3 py-2.5">
        <Lightbulb className="h-3.5 w-3.5 text-amber-600 mt-0.5 shrink-0" />
        <span className="text-amber-900">{resource.suggestion}</span>
      </div>
    </div>
  );
}
