import { EnvironmentList } from "@/components/dashboard/environment-list"
import { config } from "@/config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: `Dashboard - ${config.appName}`,
  description: "Manage your AWS environments",
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <EnvironmentList />
      </main>
    </div>
  )
}
