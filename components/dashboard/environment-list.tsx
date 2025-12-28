"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { AddEnvironmentModal } from "./add-environment-modal"
import { EnvironmentCard } from "./environment-card"
import { EnvironmentSkeleton } from "./environment-skeleton"
import { useEnvironments } from "@/hooks/use-environments"

export function EnvironmentList() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { environments, addEnvironment } = useEnvironments()

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-foreground">AWS Environments</h2>
          <p className="text-sm text-muted-foreground mt-1">Manage your connected AWS development environments</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Environment
        </Button>
      </div>

      {isLoading ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <EnvironmentSkeleton />
          <EnvironmentSkeleton />
          <EnvironmentSkeleton />
        </div>
      ) : environments.length === 0 ? (
        <Card className="border-dashed">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-lg">No environments yet</CardTitle>
            <CardDescription>Get started by adding your first AWS development environment</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center pb-6">
            <Button onClick={() => setIsModalOpen(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Add Your First Environment
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {environments.map((env) => (
            <EnvironmentCard key={env.id} environment={env} />
          ))}
        </div>
      )}

      <AddEnvironmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAdd={addEnvironment} />
    </div>
  )
}
