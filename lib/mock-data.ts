import type { AWSEnvironment, ZombieResource } from "@/types/environment"

export const MOCK_ENVIRONMENTS: AWSEnvironment[] = [
  {
    id: "env-1",
    name: "Development",
    roleArn: "arn:aws:iam::123456789012:role/ZombieCleanerDev",
  },
  {
    id: "env-2",
    name: "Staging",
    roleArn: "arn:aws:iam::123456789012:role/ZombieCleanerStaging",
  },
]

export const MOCK_ZOMBIE_RESOURCES: Record<string, ZombieResource[]> = {
  "env-1": [
    {
      id: "zombie-1",
      resourceName: "web-server-01",
      resourceType: "EC2 Instance",
      parameterName: "CPU Utilisation",
      requestedValue: "≥ 40%",
      actualValue: "3.2%",
      suggestion:
        "Consider downsizing from t3.large to t3.micro, or switching to a spot instance to reduce costs while maintaining performance.",
    },
    {
      id: "zombie-2",
      resourceName: "app-db-01",
      resourceType: "RDS Database",
      parameterName: "Memory Usage",
      requestedValue: "≥ 30%",
      actualValue: "8.7%",
      suggestion:
        "Downgrade from db.r5.xlarge to db.r5.large. The current workload only needs 2 GB of RAM, but 32 GB is allocated.",
    },
    {
      id: "zombie-3",
      resourceName: "logs-bucket",
      resourceType: "S3 Bucket",
      parameterName: "Storage Utilised",
      requestedValue: "≥ 10%",
      actualValue: "1.4%",
      suggestion:
        "Enable S3 Lifecycle policy to transition objects to Glacier after 30 days, or consolidate with other buckets.",
    },
  ],
  "env-2": [
    {
      id: "zombie-4",
      resourceName: "cache-cluster-01",
      resourceType: "ElastiCache",
      parameterName: "Cache Hit Rate",
      requestedValue: "≥ 85%",
      actualValue: "22.3%",
      suggestion:
        "Reduce cluster node count from 3 to 1. The low cache hit rate indicates the cache is over-provisioned for the current traffic.",
    },
  ],
}
