import pkg from "@/package.json"

export const siteConfig = {
  name: pkg.name,
  description: pkg.appSubtitle,
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Concepts",
      href: "/app/concepts/train",
    },
  ],
  links: {
    blog: "/blog",
    github: "/",
    docs: "/",
  },
}

export type SiteConfig = typeof siteConfig
