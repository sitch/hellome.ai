"use client"

import * as React from "react"

import * as LabelPrimitive from "@radix-ui/react-label"
import { VariantProps, cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  cn(
    "transition-all duration-220 ease-in-out",
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
    // "form-label text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
    // "text-gray-900 dark:text-white"
  ),
)

type Props = {
  type?: "radio"
}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants> &
    Props
>(({ type, className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      labelVariants(),
      type === "radio" ? "cursor-pointer" : "",
      className,
    )}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
