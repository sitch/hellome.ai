import { type LinkProps } from "next/link"

import pkg from "package.json"

type Route = LinkProps["href"]

type NavItem = {
  title: string
  href: Route
}

const mainNav: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Concepts",
    href: "/app/concepts",
  },
  {
    title: "Blog",
    href: "/blog/articles",
  },
]

const links: Record<string, Route> = {
  blog: "/blog/articles",
  github: "/",
  docs: "/",
}

export type SiteConfig = typeof siteConfig
export const siteConfig = {
  mainNav,
  links,
  name: pkg.name,
  description: pkg.appSubtitle,
}

//

// const nextI18nextConfig = require("@/next-i18next.config")

// const twitter = "hellomebooks"
// const instagram = "hellomebooks"
// const facebook = "hellomeai"
// const facebookId = "100091223025818"
// const facebookGroupId = "902112190894512"
// const domain = "hellome.ai"

// export type FormerSiteConfig = typeof formerSiteConfig
// export const formerSiteConfig = {
//   site: {
//     name: "HelloMe.ai",
//     title: "HelloMe.ai",
//     description:
//       "HelloMe.ai is a Human-first company that creates premium AI personalized children's books",
//     domain,
//     url: `https://${domain}`,
//     theme: {
//       color: "#000000",
//     },
//     sections: {
//       tech: {
//         name: "AI & Technology",
//         theme: {
//           color: "#000000",
//         },
//         tags: [
//           {
//             name: "AI",
//             color: "#000000",
//           },
//         ],
//       },
//     },

//     i18n: nextI18nextConfig.i18n,
//     // locales: nextI18nextConfig.i18n.locales,
//   },
//   business: {
//     dba: "HelloMe.ai",
//     legal: {
//       // name: 'Michael Sitchenko',
//       name: "HelloMe AI,INC",
//     },
//   },
//   social: {
//     discord: {
//       inviteURL: "https://discord.gg/JZj6AtXapx",
//     },
//     facebook: {
//       id: facebook,
//       app: {
//         id: facebook,
//       },
//       handle: `@${facebook}`,
//       url: `https://www.facebook.com/${facebook}`,
//       profile: {
//         id: facebookId,
//         url: `https://www.facebook.com/profile.php?id=${facebookId}`,
//       },
//       group: {
//         id: facebookGroupId,
//         url: `https://www.facebook.com/groups/${facebookGroupId}`,
//       },
//     },
//     instagram: {
//       id: instagram,
//       handle: `@${instagram}`,
//       url: `https://www.instagram.com/${instagram}`,
//     },
//     twitter: {
//       id: twitter,
//       handle: `@${twitter}`,
//       url: `https://twitter.com/${twitter}`,
//     },
//   },

//   // businessName: 'HelloMe.ai',
//   // dba: 'HelloMe.ai',
//   // businessLegalName: 'Michael Sitchenko',
//   // // businessLegalName: "HelloMe AI,INC",
//   // domain: 'https://hellome.ai', // your domain name
//   // analyticId: null, // "UA-12345678-0" Google Analytic Code
//   // twitter: 'hellomebooks',
//   // instagram: 'hellomebooks',
//   // facebook: '@hellomeai',
//   // facebookGroup: '902112190894512',
//   // discordInviteURL: 'https://discord.gg/JZj6AtXapx',
// }
