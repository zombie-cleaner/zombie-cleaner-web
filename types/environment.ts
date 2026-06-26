export interface AWSEnvironment {
  id: string
  name: string
  roleArn: string
  description?: string
}

export interface ZombieResource {
  id: string
  resourceName: string
  resourceType: string
  parameterName: string
  requestedValue: string
  actualValue: string
  suggestion: string
}
