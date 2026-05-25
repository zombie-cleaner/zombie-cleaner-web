"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Mock resource data
const RESOURCES = {
  EC2: [
    { id: "i-1234567890abcdef0", name: "Web Server Prod", status: "Running" },
    { id: "i-0987654321fedcba0", name: "DB Proxy Instance", status: "Stopped" },
    { id: "i-55555555555555555", name: "Backup Worker", status: "Running" },
  ],
  RDS: [
    { id: "db-prod-01", name: "User DB", status: "Available" },
    { id: "db-prod-02", name: "Analytics DB", status: "Available" },
  ],
};

export function ResourceDiscovery() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Resource Discovery
          </h2>
          <p className="text-muted-foreground mt-1">
            Browse and manage resources discovered in this environment
          </p>
        </div>
      </div>

      <Accordion type="multiple" className="w-full space-y-4">
        {Object.entries(RESOURCES).map(([type, resources]) => (
          <AccordionItem key={type} value={type} className="border-none">
            <AccordionTrigger className="text-lg font-semibold border-2 py-3 px-4 border-border rounded-xl hover:no-underline data-[state=open]:rounded-b-none data-[state=open]:bg-accent/50 data-[state=open]:border-primary/50 transition-all">
              {type} ({resources.length})
            </AccordionTrigger>
            <AccordionContent className="border-x-2 border-b-2 border-primary/50 rounded-b-xl pt-4 px-4 pb-4">
              <div className="grid gap-3">
                {resources.map((resource) => (
                  <Card
                    key={resource.id}
                    className="p-4 flex items-center justify-between"
                  >
                    <div>
                      <p className="font-medium">{resource.name}</p>
                      <p className="text-xs text-muted-foreground font-mono">
                        {resource.id}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs bg-muted px-2 py-1 rounded-full">
                        {resource.status}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-gray-900 text-white hover:bg-gray-900/80 hover:text-white"
                      >
                        Manage
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
