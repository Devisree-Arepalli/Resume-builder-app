// components/ui/dropdown-menu.tsx
import * as React from "react";
import {
  DropdownMenu as DropdownMenuPrimitive,
  DropdownMenuTrigger as DropdownMenuTriggerPrimitive,
  DropdownMenuContent as DropdownMenuContentPrimitive,
  DropdownMenuItem as DropdownMenuItemPrimitive,
} from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";

export const DropdownMenu = DropdownMenuPrimitive;

export const DropdownMenuTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuTriggerPrimitive>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuTriggerPrimitive>
>(({ className, ...props }, ref) => (
  <DropdownMenuTriggerPrimitive ref={ref} className={cn(className)} {...props} />
));
DropdownMenuTrigger.displayName = DropdownMenuTriggerPrimitive.displayName;

export const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuContentPrimitive>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuContentPrimitive>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuContentPrimitive
    ref={ref}
    sideOffset={sideOffset}
    className={cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", className)}
    {...props}
  />
));
DropdownMenuContent.displayName = DropdownMenuContentPrimitive.displayName;

export const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuItemPrimitive>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuItemPrimitive>
>(({ className, ...props }, ref) => (
  <DropdownMenuItemPrimitive
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground",
      className
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuItemPrimitive.displayName;


