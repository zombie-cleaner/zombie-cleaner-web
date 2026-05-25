import React from "react";
import { Trash2, Shield, Zap } from "lucide-react";
import { feature } from "@/types/components/landing/features-section";
import { Card } from "@/components/ui/card";

export function FeaturesSection() {
  const features: feature[] = [
    {
      icon: Trash2,
      title: "Automated Resource Detection",
      description:
        "Automatically scan your AWS accounts to identify unused EC2 instances, EBS volumes, RDS databases, and more zombie resources.",
    },
    {
      icon: Shield,
      title: "Safe Cleanup Process",
      description:
        " Review resources before deletion with detailed insights. Set up approval workflows and rollback policies for peace of mind",
    },
    {
      icon: Zap,
      title: "Multi-Environment Support",
      description:
        "Manage multiple AWS accounts and regions from a single dashboard. Perfect for organizations with dev, staging, and production environments.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-14">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          Key Features
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Everything you need to keep your AWS infrastructure lean and cost-efficient.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="p-6 hover:border-primary/30 hover:-translate-y-0.5 group"
          >
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors duration-300">
              <feature.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-base font-semibold text-foreground mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
