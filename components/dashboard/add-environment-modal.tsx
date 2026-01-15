"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ExternalLink } from "lucide-react"
import type { AWSEnvironment } from "@/types/environment"

interface AddEnvironmentModalProps {
  isOpen: boolean
  onClose: () => void
  onAdd: (environment: Omit<AWSEnvironment, "id">) => void
}

export function AddEnvironmentModal({ isOpen, onClose, onAdd }: AddEnvironmentModalProps) {
  const [name, setName] = useState("")
  const [roleArn, setRoleArn] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      onAdd({ name, roleArn })
      setIsSubmitting(false)
      setName("")
      setRoleArn("")
      onClose()
    }, 500)
  }

  const handleCancel = () => {
    setName("")
    setRoleArn("")
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-125">
        <DialogHeader>
          <DialogTitle>Add AWS Environment</DialogTitle>
          <DialogDescription>Connect a new AWS development environment to manage zombie resources</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="env-name">Environment Name</Label>
              <Input
                id="env-name"
                placeholder="Dev Environment"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role-arn">AWS Role ARN</Label>
              <Input
                id="role-arn"
                placeholder="arn:aws:iam::123456789012:role/ZombieCleanerRole"
                value={roleArn}
                onChange={(e) => setRoleArn(e.target.value)}
                required
                disabled={isSubmitting}
              />
              <p className="text-xs text-muted-foreground">Get this from the CloudFormation stack output</p>
            </div>
            <div className="bg-muted p-4 rounded-lg border border-border">
              <p className="text-sm text-foreground mb-2 font-medium">Need to set up IAM role?</p>
              <p className="text-xs text-muted-foreground mb-3">
                Deploy our CloudFormation stack in your AWS account to create the required IAM role
              </p>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => window.open("https://console.aws.amazon.com/cloudformation", "_blank")}
              >
                <ExternalLink className="h-3 w-3 mr-2" />
                Open AWS CloudFormation
              </Button>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={handleCancel} disabled={isSubmitting}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Adding..." : "Add Environment"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
