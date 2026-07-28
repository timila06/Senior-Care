import * as React from "react";
import { cn } from "@/lib/utils";

function Separator({ className, ...props }: React.ComponentProps<"hr">) {
  return <hr data-slot="separator" className={cn("shrink-0 border-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", className)} {...props} />;
}

export { Separator };
