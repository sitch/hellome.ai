import { type LinkProps } from "next/link"

import pkg from "package.json"

const mainNav: { title: string; href: LinkProps["href"] }[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Concepts",
    href: "/app/concepts",
  },
]

const links: Record<string, LinkProps["href"]> = {
  blog: "/blog/articles",
  github: "/",
  docs: "/",
}

export const siteConfig = {
  name: pkg.name,
  description: pkg.appSubtitle,
  mainNav,
  links,
}

export type SiteConfig = typeof siteConfig
