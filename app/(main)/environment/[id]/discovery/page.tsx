import { ResourceDiscovery } from "@/components/environment/resource-discovery";
import { config } from "@/config";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import BackButton from "@/components/ui/back-button";

export const metadata: Metadata = {
  title: `Resource Discovery - ${config.appName}`,
  description: "Browse discovered resources",
};

export default async function DiscoveryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href={`/environment/${id}`} className="inline-block mb-6">
          <BackButton prevPage="Environment" />
        </Link>
        <ResourceDiscovery />
      </main>
    </div>
  );
}
