import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const typographyVariants = cva(
  "block text-primary", // Base styles for typography
  {
    variants: {
      variant: {
        default: "text-xl text-muted-foreground",
        h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        h2: "scroll-m-20 text-3xl font-bold tracking-tight ",
        h3: "tracking-tight text-sm font-medium",
        h4: "scroll-m-20 text-xl font-semibold tracking-tight",
        p: "text-xs text-muted-foreground ",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface TypographyProps
  extends VariantProps<typeof typographyVariants> {
  asChild?: boolean;
  children?: React.ReactNode;
  className?: string
}

const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className,variant, asChild = false, children, ...props }, ref) => { // Include children in the destructuring
    const Comp = asChild ? Slot : "p";
    return (
      <Comp
        className={cn(typographyVariants({ variant,className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };