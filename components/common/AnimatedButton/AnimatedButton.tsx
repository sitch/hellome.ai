import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Loader from "@/components/loader"

export type AnimatedButtonProps = {
  wide?: boolean
  loading?: boolean
  caret?: "left" | "right" | undefined
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export default function AnimatedButton({
  wide = false,
  loading = false,
  disabled,
  caret = undefined,
  children,
  className,
  ...props
}: AnimatedButtonProps) {
  return (
    <>
      <button
        // variant="outline"
        className={cn(
          className ?? "",
          wide ? "w-full" : "",
          "group",
          "animate-button bg-gradient-to-r from-emerald-400 via-indigo-400 to-rose-400 transition-all ease-in",
          "rounded-lg",
          "shadow-indigo shadow-lg hover:shadow-blue-700/50",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
          "focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800",
          "text-sm font-medium text-gray-900",
          "disabled:pointer-events-none disabled:opacity-50",
          "h-auto w-auto",
          // "relative inline-flex items-center justify-center",
          "mb-1 mr-1 p-0.5"
        )}
        disabled={!!loading || disabled}
        {...props}
      >
        <span
          className={cn(
            "font-semibold",
            "text-gray-900 dark:text-white",
            "bg-white dark:bg-gray-900",
            "group-hover:bg-white/5 group-hover:text-white",
            "dark:group-hover:bg-gray-900/5 dark:group-hover:text-gray-900",
            "transition-all duration-2.2s ease-in",
            "inline-flex h-full w-full",
            "relative",
            loading ? "px-2 py-3" : "px-6 py-3",
            loading ? "cursor-wait" : "",
            disabled ? "cursor-not-allowed" : "",
            "rounded-md"
          )}
        >
          {loading ? (
            <Loader />
          ) : (
            <>
              {caret == "left" && (
                <svg
                  className="mr-2 inline h-2.5 w-2.5 rotate-180"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
              {children}
              {caret == "right" && (
                <svg
                  className="mr-2 inline h-2.5 w-2.5 "
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </>
          )}
        </span>
      </button>
    </>
  )
}
