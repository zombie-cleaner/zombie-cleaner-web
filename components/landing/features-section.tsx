import React from 'react'
import { Trash2 } from 'lucide-react'
import { Shield } from 'lucide-react'
import { Zap} from 'lucide-react'
import { Check } from 'lucide-react'
const FeaturesSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">Key Features</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="border border-border rounded-lg p-6 bg-card">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Trash2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Automated Resource Detection</h3>
            <p className="text-muted-foreground">
              Automatically scan your AWS accounts to identify unused EC2 instances, EBS volumes, RDS databases, and
              more zombie resources.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="border border-border rounded-lg p-6 bg-card">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Safe Cleanup Process</h3>
            <p className="text-muted-foreground">
              Review resources before deletion with detailed insights. Set up approval workflows and rollback policies
              for peace of mind.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="border border-border rounded-lg p-6 bg-card">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Multi-Environment Support</h3>
            <p className="text-muted-foreground">
              Manage multiple AWS accounts and regions from a single dashboard. Perfect for organizations with dev,
              staging, and production environments.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="border border-border rounded-lg p-6 bg-card">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Check className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">CloudFormation Integration</h3>
            <p className="text-muted-foreground">
              Easy setup with our CloudFormation template. Secure IAM role creation with read-only access to scan your
              resources safely.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="border border-border rounded-lg p-6 bg-card">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Check className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Cost Savings Insights</h3>
            <p className="text-muted-foreground">
              See potential monthly savings for each resource. Track your cleanup history and measure the financial
              impact of optimization.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="border border-border rounded-lg p-6 bg-card">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Check className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Real-Time Monitoring</h3>
            <p className="text-muted-foreground">
              Get notified when new zombie resources are detected. Schedule automatic scans and receive weekly cleanup
              reports via email.
            </p>
          </div>
        </div>
      </section>

  )
}

export default FeaturesSection
