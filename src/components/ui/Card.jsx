import * as React from "react";
import { cn } from "../lib/Utils";

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, padding = "p-6", ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5", padding, className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className, padding = "p-6 pt-0", ...props }, ref) => (
  <div ref={ref} className={cn(padding, className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ className, padding = "p-6 pt-0", ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center", padding, className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

// New component: CardImage (optional image for the card)
const CardImage = React.forwardRef(({ className, alt, ...props }, ref) => (
  <img
    ref={ref}
    className={cn("w-full rounded-t-lg", className)}
    alt={alt}
    {...props}
  />
));
CardImage.displayName = "CardImage";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CardImage };
