import * as React from "react"

import { cva, type VariantProps } from "class-variance-authority"
import { type LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary-foreground/80 hover:text-secondary",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        control: "text-muted-foreground hover:text-accent-foreground ",
        link: "underline-offset-4 hover:underline text-primary",

        // primary: "bg-primary/80 text-primary-foreground hover:bg-primary/60",
        //         accent:  "bg-accent text-accent-foreground hover:bg-accent/80",

        none: "",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export const iconVariants = {
  size: {
    sm: 14,
    default: 18,
    lg: 24,
  },

  className: {
    sm: "mx-1",
    default: "mx-2",
    lg: "mx-3",
  },
}

export type ButtonProps = {
  icon?: LucideIcon
  transition?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      transition = true,
      type = "button",
      icon: Icon,
      disabled,
      children,
      className,
      variant,
      size,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, size, className }),
          transition ? "duration-220 transition-all ease-in-out" : "",
          disabled ? "" : "",
        )}
        ref={ref}
        {...props}
      >
        {Icon ? (
          <Icon
            size={iconVariants.size[size ?? "default"]}
            className={cn(
              iconVariants.className[size ?? "default"],

              disabled ? "" : "",
            )}
          />
        ) : null}
        {children as React.ReactNode}
      </button>
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
