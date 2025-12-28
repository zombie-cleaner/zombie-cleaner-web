"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useEnvironments } from "@/hooks/use-environments"

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
            <CardDescription>The environment you're looking for doesn't exist</CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Link href="/dashboard">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>
      </Link>

      <div>
        <h2 className="text-2xl font-semibold text-foreground">{environment.name}</h2>
        <p className="text-sm text-muted-foreground mt-1">Environment details and resource management</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Environment Information</CardTitle>
            <CardDescription>Basic configuration and settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Environment Name</p>
              <p className="text-sm font-medium">{environment.name}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">AWS Role ARN</p>
              <p className="text-sm font-mono break-all">{environment.roleArn}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Status</p>
              <p className="text-sm">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Connected
                </span>
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Zombie Resources</CardTitle>
            <CardDescription>Unused resources detected in this environment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <p className="text-sm text-muted-foreground">Resource scanning will be implemented in the next phase</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Cleanup Schedule</CardTitle>
          <CardDescription>Configure automated cleanup rules for zombie resources</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p className="text-sm text-muted-foreground">Scheduling features coming soon</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
