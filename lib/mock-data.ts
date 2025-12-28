import type { AWSEnvironment } from "@/types/environment"

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
