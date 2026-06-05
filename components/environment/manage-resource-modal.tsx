"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ConfirmationDialog } from "@/components/ui/confirmation-dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface Resource {
  id: string;
  name: string;
  status: string;
}

interface ManageResourceModalProps {
  resource: Resource | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ManageResourceModal({
  resource,
  isOpen,
  onClose,
}: ManageResourceModalProps) {
  const [showConfirm, setShowConfirm] = useState(false);

  if (!resource) return null;

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Manage: {resource.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">ID</p>
              <p className="text-sm font-mono">{resource.id}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Status</p>
              <p className="text-sm">{resource.status}</p>
            </div>
            <div className="border-t pt-4 space-y-4">
              <h3 className="font-semibold">Actions</h3>
              <div className="space-y-2">
                <Label>Schedule Deletion</Label>
                <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                        <Label className="text-xs">From</Label>
                        <Input type="datetime-local" />
                    </div>
                    <div className="space-y-1">
                        <Label className="text-xs">To</Label>
                        <Input type="datetime-local" />
                    </div>
                </div>
              </div>
              <Button
                variant="destructive"
                className="w-full"
                onClick={() => setShowConfirm(true)}
              >
                Delete Resource
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <ConfirmationDialog
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={() => {
            // TODO: Implement deletion logic
            console.log("Delete", resource.id);
            setShowConfirm(false);
            onClose();
        }}
        title="Delete Resource"
        description={`Are you sure you want to delete ${resource.name}? This action cannot be undone.`}
      />
    </>
  );
}
