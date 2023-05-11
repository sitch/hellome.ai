import Link from "next/link"
import { useTranslation } from "next-i18next"

import { Newspaper } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/app/main-nav"
import { ThemeToggle } from "@/components/app/theme-toggle"

export function SiteHeader() {
  const { t } = useTranslation()

  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={t("nav.sections", { returnObjects: true })} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={t("header.links.blog.href")}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Newspaper className="h-5 w-5" />
                <span className="sr-only">{t("header.links.blog.label")}</span>
              </div>
            </Link>

            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
