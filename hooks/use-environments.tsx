"use client"

import { useState, useEffect } from "react"
import type { AWSEnvironment } from "@/types/environment"
import { MOCK_ENVIRONMENTS } from "@/lib/mock-data"

export function useEnvironments() {
  const [environments, setEnvironments] = useState<AWSEnvironment[]>([])

  useEffect(() => {
    // Load from localStorage or use mock data
    const stored = localStorage.getItem("aws-environments")
    if (stored) {
      setEnvironments(JSON.parse(stored))
    } else {
      setEnvironments(MOCK_ENVIRONMENTS)
    }
  }, [])

  const addEnvironment = (environment: Omit<AWSEnvironment, "id">) => {
    const newEnvironment: AWSEnvironment = {
      ...environment,
      id: `env-${Date.now()}`,
    }
    const updated = [...environments, newEnvironment]
    setEnvironments(updated)
    localStorage.setItem("aws-environments", JSON.stringify(updated))
  }

  return {
    environments,
    addEnvironment,
  }
}
