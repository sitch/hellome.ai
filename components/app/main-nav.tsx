import Link, { type LinkProps } from "next/link"
import { useTranslation } from "next-i18next"

import { Hand } from "lucide-react"

import { cn } from "@/lib/utils"

export type NavItem = {
  label: string
  href: LinkProps["href"]
  disabled?: boolean
  external?: boolean
}

type MainNavProps = {
  items?: NavItem[]
}

export function MainNav({ items = [] }: MainNavProps) {
  const { t } = useTranslation()
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <Hand className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {t("nav.title")}
        </span>
      </Link>
      {items.length > 0 ? (
        <nav className="hidden gap-6 md:flex">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "text-muted-foreground flex items-center text-lg font-semibold sm:text-sm",
                item.disabled && "cursor-not-allowed opacity-80",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  )
}
