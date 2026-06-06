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
import { Info } from "lucide-react";

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
  const [scheduledFrom, setScheduledFrom] = useState("");
  const [scheduledTo, setScheduledTo] = useState("");
  const [isScheduled, setIsScheduled] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  if (!resource) return null;

  const handleSaveSchedule = () => {
    if (scheduledFrom && scheduledTo) {
        setIsScheduled(true);
        setIsEditing(false);
    }
  };

  const handleEditSchedule = () => {
    setIsEditing(true);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Manage: {resource.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">ID</p>
              <p className="text-sm font-mono">{resource.id}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Status</p>
              <p className="text-sm">{resource.status}</p>
            </div>

            <div className="border-t pt-4 space-y-6">
              
              {/* Schedule Shutdown Section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold flex items-center gap-2">
                        Schedule Shutdown
                        <Info className="h-4 w-4 text-muted-foreground" />
                    </h3>
                </div>

                {isScheduled && !isEditing ? (
                    <div className="space-y-3">
                        <div className="p-3 bg-muted rounded-md text-sm">
                            Resource will be shutdown from <strong>{scheduledFrom}</strong> to <strong>{scheduledTo}</strong>.
                        </div>
                        <div className="flex justify-end">
                            <Button onClick={handleEditSchedule} variant="outline">
                                Edit
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-2">
                            <div className="space-y-1">
                                <Label className="text-xs">From <span className="text-red-500">*</span></Label>
                                <Input required type="datetime-local" value={scheduledFrom} onChange={(e) => setScheduledFrom(e.target.value)} />
                            </div>
                            <div className="space-y-1">
                                <Label className="text-xs">To <span className="text-red-500">*</span></Label>
                                <Input required type="datetime-local" value={scheduledTo} onChange={(e) => setScheduledTo(e.target.value)} />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <Button 
                                onClick={handleSaveSchedule} 
                                disabled={!scheduledFrom || !scheduledTo}
                                className="bg-black text-white hover:bg-black/80"
                            >
                                {isScheduled ? "Update" : "Schedule"}
                            </Button>
                        </div>
                    </div>
                )}
              </div>

              {/* Delete Resource Section */}
              <div className="border-t pt-4 space-y-3">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold flex items-center gap-2">
                        Delete Resource Permanently
                        <Info className="h-4 w-4 text-muted-foreground" />
                    </h3>
                </div>
                <div className="flex justify-end">
                    <Button
                        variant="outline"
                        className="bg-black text-white hover:bg-black/80"
                        onClick={() => setShowConfirm(true)}
                    >
                        Delete
                    </Button>
                </div>
              </div>

            </div>
          </div>
        </DialogContent>
      </Dialog>
      <ConfirmationDialog
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={() => {
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
