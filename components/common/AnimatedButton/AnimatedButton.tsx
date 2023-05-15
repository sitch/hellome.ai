import { cn } from "@/lib/utils"

import { Button, iconVariants, type ButtonProps } from "@/components/ui/button"
import Loader from "@/components/app/loader"

export type AnimatedButtonProps = ButtonProps & {
  wide?: boolean
  loading?: boolean
}

export default function AnimatedButton({
  icon: Icon,
  wide = false,
  loading = false,
  shadow = "default",
  disabled,
  children,
  className,
  size,
  ...props
}: AnimatedButtonProps) {
  return (
    <>
      <Button
        size={size}
        transition="none"
        // variant="outline"
        className={cn(
          // className ?? "",
          wide ? "w-full" : "",
          "group",
          "animate-bg-wave bg-gradient-to-r from-emerald-400 via-indigo-400 to-rose-400 transition-all ease-in-out",
          "rounded-lg",
          shadow === "default"
            ? "shadow-indigo shadow-lg hover:shadow-blue-700/50"
            : "",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
          "focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800",
          "text-sm font-medium text-gray-900",
          "disabled:pointer-events-none disabled:opacity-50",
          "h-auto w-auto",
          // "relative inline-flex items-center justify-center",
          "mb-1 mr-1 p-0.5",
          className,
        )}
        disabled={!!loading || disabled}
        {...props}
      >
        <span
          className={cn(
            "font-semibold",
            "text-gray-900 dark:text-white",
            "bg-white dark:bg-gray-900",
            "group-hover:bg-white/30 group-hover:text-white",
            "dark:group-hover:bg-gray-900/30 dark:group-hover:text-gray-900",
            "transition-all duration-2.2s ease-in",
            "inline-flex h-full w-full",
            "relative",
            loading ? "px-2 py-3" : "px-6 py-3",
            loading ? "cursor-wait" : "",
            disabled ? "cursor-not-allowed" : "",
            "rounded-md",
          )}
        >
          {loading ? (
            <Loader />
          ) : (
            <>
              {Icon ? (
                <Icon className={cn(iconVariants({ size, edge: "start" }))} />
              ) : null}
              {children}
            </>
          )}
        </span>
      </Button>
    </>
  )
}
