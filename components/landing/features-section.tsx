import React from "react";
import { Trash2 } from "lucide-react";
import { Shield } from "lucide-react";
import { Zap } from "lucide-react";
import { Check } from "lucide-react";
import { feature } from "@/types/components/landing/featuers-section";
const FeaturesSection = () => {
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
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
        Key Features
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features?.map((feature, index) => (
          <div
            key={index}
            className="border border-border rounded-lg p-6 bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30 hover:-translate-y-0.5"
          >
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 transition-colors duration-300">
              {feature?.icon ? (
                <feature.icon className="h-6 w-6 text-primary" />
              ) : (
                <></>
              )}
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {feature?.title || ""}
            </h3>
            <p className="text-muted-foreground">
              {feature?.description || ""}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
