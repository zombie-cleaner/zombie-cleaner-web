"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Info,
  CheckCircle2,
  Cloud,
  Trash2,
} from "lucide-react"
import Link from "next/link"
import { useEnvironments } from "@/hooks/use-environments"
import { Badge } from "@/components/ui/badge"

interface EnvironmentDetailProps {
  environmentId: string
}

export function EnvironmentDetail({ environmentId }: EnvironmentDetailProps) {
  const { environments } = useEnvironments()
  const environment = environments.find((env) => env.id === environmentId)

  if (!environment) {
    return (
      <div className="space-y-4">
        <Link href="/dashboard">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </Link>

        <Card>
          <CardHeader>
            <CardTitle>Environment not found</CardTitle>
            <CardDescription>
              The environment you're looking for doesn't exist.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Back */}
      <Link href="/dashboard">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>
      </Link>

      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            {environment.name}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Environment details and resource management
          </p>
        </div>

        {/* <Badge
          variant="secondary"
          className="flex items-center gap-1.5"
        > */}
          <CheckCircle2 className="h-4 w-4 text-green-500" />
          Connected
        {/* </Badge> */}
      </div>

      {/* Main Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Environment Info */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">
              Environment Information
            </CardTitle>
            <CardDescription>
              Basic configuration and connection details
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <InfoRow label="Environment Name" value={environment.name} />
            <InfoRow
              label="AWS Role ARN"
              value={environment.roleArn}
              mono
            />
            <InfoRow
              label="Connection Status"
              value="Connected"
              icon={<CheckCircle2 className="h-4 w-4 text-green-500" />}
            />
          </CardContent>
        </Card>

        {/* Resources Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Cloud className="h-5 w-5 text-muted-foreground" />
              Resources
            </CardTitle>
            <CardDescription>
              Detected AWS resource types
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <ResourceStat label="EC2 Instances" value="—" />
            <ResourceStat label="S3 Buckets" value="—" />
            <ResourceStat label="Lambda Functions" value="—" />

            <p className="text-xs text-muted-foreground pt-2">
              Resource discovery coming soon
            </p>
          </CardContent>
        </Card>

        {/* Zombie Resources */}
        <Card className="lg:col-span-3 border-dashed">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Trash2 className="h-5 w-5 text-muted-foreground" />
              Zombie Resources
            </CardTitle>
            <CardDescription>
              Unused resources detected in this environment
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex flex-col items-center justify-center py-10 text-center gap-2">
              <p className="text-sm text-muted-foreground">
                Automated scanning and cleanup rules
                <br />
                will be available in the next phase.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

/* ---------- Small UI Helpers ---------- */

function InfoRow({
  label,
  value,
  icon,
  mono,
}: {
  label: string
  value: string
  icon?: React.ReactNode
  mono?: boolean
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <p className="text-sm text-muted-foreground">{label}</p>
      <div
        className={`text-sm font-medium text-right ${
          mono ? "font-mono break-all" : ""
        }`}
      >
        {icon && <span className="inline-flex mr-1">{icon}</span>}
        {value}
      </div>
    </div>
  )
}

function ResourceStat({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  )
}
