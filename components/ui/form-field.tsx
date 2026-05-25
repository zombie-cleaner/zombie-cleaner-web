import * as React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, className, id, ...props }, ref) => {
    return (
      <div className="space-y-2 w-full">
        <Label htmlFor={id} className={cn(error && "text-destructive")}>
          {label}
        </Label>
        <Input
          id={id}
          ref={ref}
          className={cn(
            error && "border-destructive focus-visible:ring-destructive",
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-destructive mt-1">{error}</p>}
      </div>
    );
  }
);

FormField.displayName = "FormField";

export { FormField };
