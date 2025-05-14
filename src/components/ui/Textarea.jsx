import * as React from "react";
import { cn } from "../lib/Utils";

const Textarea = React.forwardRef(({ className, rows = 4, ...props }, ref) => {
  return (
    <textarea
      rows={rows} // default to 4 rows if not provided
      className={cn(
        "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
