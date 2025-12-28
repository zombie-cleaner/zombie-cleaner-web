import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { EnvironmentDetail } from "@/components/environment/environment-detail"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Environment Details - Zombie Cleaner",
  description: "View AWS environment details",
}

export default async function EnvironmentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <EnvironmentDetail environmentId={id} />
      </main>
    </div>
  )
}
