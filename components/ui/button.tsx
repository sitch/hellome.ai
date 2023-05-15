import * as React from "react"
import Link, { type LinkProps } from "next/link"

import { cva, type VariantProps } from "class-variance-authority"
import { type LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export const iconVariants = cva("", {
  variants: {
    size: {
      default: "h-5",
      sm: "h-4",
      lg: "h-6",
    },
    edge: {
      start: "mr-1",
      end: "ml-1",
    },
  },
  compoundVariants: [
    {
      edge: "start",
      size: ["sm"],
      class: "mr-0.5",
    },
    {
      edge: "end",
      size: ["sm"],
      class: "ml-0.5",
    },
    {
      edge: "start",
      size: ["lg"],
      class: "mr-1.5",
    },
    {
      edge: "end",
      size: ["lg"],
      class: "ml-1.5",
    },
  ],
  defaultVariants: {
    size: "default",
    edge: "start",
  },
})

export type IconVariantProps = VariantProps<typeof iconVariants>

const buttonVariants = cva(
  cn(
    "inline-flex items-center justify-center",
    "text-sm font-medium",
    "rounded-md",

    // Ring
    "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring  focus-visible:ring-offset-2",

    // Disabled
    "disabled:pointer-events-none disabled:opacity-50",
  ),
  {
    variants: {
      variant: {
        default: ["text-primary-foreground", "bg-primary hover:bg-primary/90"],
        destructive: [
          "text-destructive-foreground",
          "bg-destructive hover:bg-destructive/90",
        ],
        outline: [
          "border border-input",
          "hover:text-accent-foreground",
          "hover:bg-accent",
        ],
        secondary: [
          "text-secondary-foreground hover:text-secondary",
          "bg-secondary hover:bg-secondary-foreground/80",
        ],
        ghost: ["hover:text-accent-foreground", "hover:bg-accent"],
        control: ["text-muted-foreground hover:text-accent-foreground"],
        link: ["text-primary", "underline-offset-4 hover:underline"],
        none: "",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
      },
      shadow: {
        default: "shadow-md shadow-transparent hover:shadow-blue-700/50",
        hover: "shadow-lg shadow-transparent hover:shadow-blue-700/50",
        none: "",
      },
      transition: {
        default: "duration-200 transition-all ease-in-out",
        none: "",
      },
    },
    defaultVariants: {
      size: "default",
      shadow: "default",
      variant: "default",
      transition: "default",
    },
  },
)

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    href?: LinkProps["href"]
    icon?: LucideIcon
    iconEdge?: IconVariantProps["edge"]
  }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = "button",

      className,
      disabled,
      children,

      // Button Variants
      size,
      shadow,
      variant,
      transition,

      // Icon
      href,
      icon: Icon,
      iconEdge = "start",
      ...props
    },
    ref,
  ) => {
    const iconContent = Icon && (
      <Icon className={cn(iconVariants({ size, edge: iconEdge }))} />
    )

    const buttonContent = (
      <button
        className={cn(
          buttonVariants({ transition, shadow, variant, size, className }),
        )}
        ref={ref}
        type={type}
        disabled={disabled}
        aria-disabled={disabled}
        {...props}
      >
        {iconEdge === "start" && iconContent}
        {children}
        {iconEdge === "end" && iconContent}
      </button>
    )

    if (href) {
      return <Link href={href}>{buttonContent}</Link>
    }

    return buttonContent
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
