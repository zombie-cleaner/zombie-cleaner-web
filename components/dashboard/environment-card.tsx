import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import type { AWSEnvironment } from "@/types/environment"

interface EnvironmentCardProps {
  environment: AWSEnvironment
}

export function EnvironmentCard({ environment }: EnvironmentCardProps) {
  return (
    <Card className="hover:border-foreground/20 transition-colors">
      <CardHeader>
        <CardTitle className="text-lg">{environment.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div>
            <p className="text-xs text-muted-foreground mb-1">AWS Role ARN</p>
            <p className="text-sm min-h-12 font-mono text-foreground/80 break-all">{environment.roleArn}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/environment/${environment.id}`} className="w-full">
          <Button variant="outline" className="w-full bg-transparent">
            <ExternalLink className="h-4 w-4 mr-2" />
            View
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
