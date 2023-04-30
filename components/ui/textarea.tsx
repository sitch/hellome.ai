/* eslint-disable react/prop-types */

import * as React from "react"

import { cn } from "@/lib/utils"

export type TextareaProps =
  {} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }: TextareaProps, ref) => {
    return (
      <textarea
        className={cn(
          "duration-220 transition-all ease-in-out",
          "border-input ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-20 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          // "bg-transparent",
          "bg-white dark:bg-black",
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Textarea.displayName = "Textarea"

export { Textarea }
