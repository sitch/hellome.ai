import { JSXElementConstructor, ReactNode, Suspense } from "react"
import Link, { LinkProps } from "next/link"
import { MDXProvider } from "@mdx-js/react"
import type { MDXComponents } from "mdx/types"
// import Footer from './Footer'
import { useTranslation } from "next-i18next"
import { DefaultSeo } from "next-seo"
import { route } from "nextjs-routes"

import { Footer } from "@/components/landing/Footer"
// import Header from './Header'
import Header from "@/components/landing/Header"
import styles from "@/styles/Layout.module.css"

import { DateTimes, Heading, Lists, Media, Typography } from "./ui"

const Hero = () => (
  <section className="relative">
    <div
      aria-hidden="true"
      className="absolute inset-0 top-56 grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-30"
    >
      <div className="h-56 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700" />
      <div className="h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600" />
    </div>
    <div className="mx-auto px-4 pt-32 sm:px-12 sm:pt-40 md:pt-48 lg:pt-56 xl:max-w-6xl xl:px-0">
      <div className="relative z-10">
        <div className="flex flex-col">
          <h1 className="text-center text-5xl font-bold text-blue-900 dark:text-white sm:text-6xl md:text-left lg:text-7xl">
            Design, Build,
            <span className="relative">
              <svg
                className="absolute inset-x-0 -bottom-1 w-full opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                viewBox="0 0 260 15.6"
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n                                  .st0 {\nfill: #957fef\n}\n                              ",
                  }}
                />
                <path
                  className="st0"
                  d="M206.8 7.3l-.1.3c.1-.2.2-.3.1-.3zM234.7 10h-.1c-.2.4-.1.3.1 0zM54.8 4.2l-.6-.4c.2.4.4.5.6.4zM17.1 5.1zM34.5 9.6l.1.3c0-.2 0-.3-.1-.3zM22.4 10.8c-.3-.1-.7-.1-1-.1.2.1.7.1 1 .1zM17.5 5c-.1.1-.2.1-.4.2.2-.1.3-.2.4-.2zM52.7 9.8l.5.9c-.1-.3-.3-.6-.5-.9zM19.5 11.6c-.2-.2-.4-.2-.6-.3 0 .2.3.3.6.3zM120.9 11.4c-.1.1-.2.2-.2.3.3-.1.3-.2.2-.3zM80.9 10.4h-.1s.1.1.2.1l-.1-.1zM92.6 10.4l-.2.2c.2-.1.2-.1.2-.2zM72.1 11.3c-.1.1-.3.2-.4.3l.4-.3z"
                />
                <path
                  className="st0"
                  d="M260 6c-1-.6-4.7-1.2-5.8.3-.2-.1.1-.3.2-.4-.9.2-2.2.1-3.6 0s-2.9-.2-4.2 0c-1 1.5-3.9-.6-4.8 1.4l.5-.4c.9.5-1.2 1.4-1.5 1.9-.8-1.2-.1-1-1-2l1.1.4-.3-1c-3.1 2.8-6.2-.9-8.2 1.1.1-.1.1-.3.2-.4-1.4-.5-2.3.8-3.3 1.2-.1-.5.6-.9 1.1-1.3-2.4-.3-6.4 1.2-9 .4-.9.7.4.9-.6 1.5-.8-.2-1.4-.7-.4-1.1-2.3-1.2-7.6 1-11.1-.2-1.8.8-.7 1.1-3.5 1.6.7-.5-.7-1.7 1-1.7l.2-.5c-2.8-.1-6.6-.3-8.1 1.2-.1-1.1-.5-.2-1.6-.8-.4.1 0 .2.2.2-1 .9-1.6-.1-2.3.1l.3-.2-2 .7c-.3-.2-.8-.4-.9-.7v.8c-1.1 0-.5-1-1.9-.8l.3.6c-.9-.4-2.2.4-2.4-.5 0-.2.1-.1.4-.1-1.3-1.2-3.5.3-5.1-.3l.4 1.3c-1.6.4-1-.3-.9-.7-1.1 0-1.3-.4-2.7-.6-.7.3-.4.5-.6.8l-1.5-.4 1-.7c-2.3 1.8-5.6-.4-7.2 1.2-.8-.4.8-.7.3-1-2.6-.9-6 1-8.2 0-3.6-1-7.8-.4-11.8-1.1l.1.3-2.9-.4c-.8.7-2.7.3-4 1.1.1-.3-.1-.7.2-.9-1.2.1-2.6.4-3.3-.1l.4-.3c-2.7-.3-6.4-.5-7.9.1-.9 0-.9-.6-1.1-1-1.6-.1-2.6.2-3.9.7-.3-.2-.7-.3-1-.6l-.6.8c-.6-.1-.1-.7-.6-.9-2.5.9-5.3-.1-7-.1l.2.4c-.7.3-2.1-.3-1.2-.7-3.4-.6-5.1 1.2-9.6.8-.6-1.5-4.1.3-4.8-1.4-1.9.4-3.2-.3-4.5.6 0-.2-.2-.2.1-.3-.8-.6-3.3-.2-5.3.2l-.1-.5c-.9 1.2-4.2.9-4.9 2-.2-.2.4-.5.7-.7-1-1.1-1.8.5-3.1.2.1-.3-.3-.6 0-.8-4.4-1.2-10.6.7-16.3-.1-1.6 0 .6 1.2-1.5 1.1-.6-.6 1-1.1-.3-1.4-.9.7-1.3.5-2.6.5.2-.4 0-.6.9-.9-.7-.5-3.1.9-4.5 0 .1.3-.2.5-.5.7-2.1 1-4.9-.9-5.1-.4 0 0-.7.2-.1.3-.8 0-1.9-.2-1.7-.7-.4.3-.8.8-1.4.8l.3-.6c-.4.1-.8.5-1.1.6l.6.4c-.9-.5-2.6.8-2.6-.4h.3l-1.7-.5c-.7.5-1.3 1-2.5.9-.5-1.3-2.9-.2-4.3-.3l.1-.4c-1.1.6-4 .4-3.5.6-1.1 0-2.6-.2-2-.6-.8.1-2.7.1-3.2.9l-1.8-1c-1 1.6-3.6-.5-3.6 1.2-1-.2-.8-.6-1.5-.9-1.4.9-2.8.8-4.2.7v-.2c-1.4-.1-3.1.8-5.1 1l-.5-1.2c-1 .2-1.3 1.2-2.3 1-.2-.2 0-.3.2-.3-1 .3-2.3.1-3.1-.2-1.5 1-2.7.7-3.9 1.8-1.3-1 1.7-.6.6-1.6-2.2-.4-4.4.4-6.7 1.1-.2-.2 0-.4.1-.7 0 0-1.2.9-2.2 1.8C.9 8.3 0 9.4.5 10c-.5.9-1.2 1.4.9 2 .6-.5 2.5-1.3 2.9-.4l.1-.9c2.6-.6.4 1.8 3.6 1.6l-.7-.3c.6-.1 1.1-.7 1.8-.5.2.2-.2.4-.5.6.9-.5 1.7-.9 2.6-1.4.1.5.1.8-.4 1.2 2.5-.2-.6-1.6 2.4-1.4.6.4-.2.6-.5.9 1.4.7 2.3-.1 3.8-.6.1.8-.9.7.3 1.2-.3-.4-.5-1.1.5-1.2-.4.8.7.4 1.6.5-.2-.3-.1-.6.2-.8.4-.1.8.1 1.4.1l-1.1-.7c1.5-.8 2.4.3 3.6.6-.1.1-.3.3-.5.3 1.2.3 2.5.9 4.1.1l-.3.1c2.9-.9-1-1.3 2.4-2.2 1.1.1-.4 2.6 2.1 1.6-1.3-.6 1.6-1.7 3.1-2L32.4 10c.6 0 1.6-.5 2-.3l-.1-.3c-.2-1.3 1.9.1 3-.7-1.3 1.8-1.4 1.5-1.6 3.2 1-1 2.2-1.9 4.1-1.8l-1.5 1.4c2.5.2 5.5-1.9 7.6-3-.5 1 .3 1.4-.6 2.2l2.4-.3-.7 1.1c1-1.2 2.1-.4 1.9-1.9-.3.2-.2.4-.7.3.1-.4.5-1.4 1.7-1.3.9.3-.5.6-.2 1 .8-.6.9.3 1.7-.1l-.8-.6c.6-.9 1.4-.1 2.2-.5-1 .4-.7.9-.3 1.4l-.1-.1c.8-.1 1.6-.7 2-.2l-.5 1.2.9-.9c.3.1.6.6 0 .8 2.8.7-.1-2.5 3.6-1.5 0 .5-.4.8-1.4.5-.2.7.1 1.1 1.1 1.4v.1c1.9 0 4.4 0 5.6-.8.4.3 0 .6-.4.9 2.1.4 2.8-.7 5 .1l-1-.4c1.4-.6 4-.8 5.3.1l-.4.3c1.3-.7 3.5.6 4 0-.6-.4 0-.6-.8-1l3.4-.7.2 1.2 1.8-.4c-.4-.5 2.4.4 2.5-.7 1 .4-.4.9-.8 1.4 1-.3 1.1.2 2.1-.5l1 1.1 2.6-.7c-.1.1 0 .2-.1.3 1.2-.9 3.1.6 4.6-.9-.1.1-.1.1-.1.2.9-.8 2.9-.2 3.7 0 1.4-.2.6-1 .6-1.4 3.9.4 2.7.3 6-.9 2 1.4-2.4 2.1.1 3 .4-.6 2.1-1.1 4.1-1.3 1.8.5 4.8.9 6.5 1.9l-.2-.9 2.6-.4-1.5 1.2c.4-.3 1.7-.8 2.6-1.2 2.7-.7 1.4 1.9 3.5.7.1.1.1.2.2.3.7-.6 2.4-.3 4.4-.5l-.7 1.1-1.3-.3c.7 1.1 2.1-.1 3.4 0 1.3-.3.7-1.3 1.4-1.6.5.1 1.2-.2 1.6.1 1.1.4.1 1.3-.3 1.8 1-1.1 1.4-.9 3.6-1.3.1.5-.1.8-.4.9.5-.1.9-.3 1.2-.8l.7.7c2.5 1 2.6-2 5.6-1.5-.8.6 2.6 0 3.5.7-1.1.1.4 1.6-.2 2.3 2.4.5 1-1.3 3-1.4l-.9 1.3c1.9-.5.5-.7 2.4-1.1-.5.4.8.4-.3.8 2.5.2 1.9.1 4.1.3l.2-1.3c.7-.1 1 .5 1.2.7-.3 0-.8-.1-.7.1.8 1.2 1.4-.6 2.4.5-.2-.4-.5-1 .4-1.1-.3.8 1.4.8 1.4 1.2-.6-.6 2-.2 2.1-1 1 .7-.4.6-.4 1.1.9-1 3.7 0 4.6-.6 0 .1.1.1.1.2 1.2-.6 3-.7 5.3-1.5l-.8.7c2.2.4 1.4-1.5 3.3-1.5-.4 1.1 3.1 0 2.2 1.2 1.1-.6 2.3-.8 3.1-1.7 1 .6-2.1 1.4-.6 1.8l1.6-.5.3.6c.1-.4 1.5-.4 1.4-.8.2.7.9 1.2.8 1.8 1-.2 2.4.5 3.3-.1l.1.3c1-1.3 3.1-.2 3.6-1.5l.6.7c1.5-.1 1.3-1.5 2-1.8.6 0 1.4-.2 2 0-2 .8 1 1.1 1.4 1.6.8 0 3.1 0 3.7-.7-1 .7-.4 1.2-2.1 1.3.9 1.3 2.6-.2 4.5-.1v.6c2.7-.4 2.8-1.5 4-2.5.3.8.1 1-.7 1.7 1.8.5 4.7-.1 6.7 0 .6.5.2.9-.5 1.1 2.1-.6 4.7.1 6-1.2-.5.5.9.3 1.6.6 0-.3.1-.6.2-.6 1.3-.6 4.1-1.1 5.6-.7l-.5.4c1.7.1 3-.5 4.3-.9 1.3-.4 2.6-.8 4.5-.4.7.3-.7 1.1.7 1 .7-.5.4-1.5 2.2-1.3l-.1.9 1.2-.9c-.7-.7-2.6-.4-1.3-1.2 1.6.8 1.3-.9 3.3 0-.4.1-1 .8-1.3 1.2 2 .4 3.4.1 4.8-.1 1.4-.3 2.8-.6 4.9-.2 2-.8 4.6-1.2 5.9-1.9 0 .9 0 1.7-.8 2.4 1.8 0 2.4-2.1 3.7-.9.7-1.3 4.7-1.2 5-3l2-.8z"
                />
                <path
                  className="st0"
                  d="M58.1 11.1c-1 0-1.9 0-2.3.2.2.2 2.3.6 2.3-.2zM208.2 13.3c-.1 0-.3.1-.4.1.1 0 .3 0 .4-.1zM216.3 12.9c-.1-.1-.2-.2-.4-.3 0 .3.1.5.4.3zM132.6 11.5zM178.5 13.7c.7-.4 1-.7 1-1-.4.1-.7.3-1 1zM163 12.6c-.1.1-.2.1-.3.2.3-.1.3-.2.3-.2zM130.2 12c.7-.4 1.6-.3 2.4-.5-.7.2-1.9-.3-2.4.5zM226.1 11.4l-.7.6.8-.4zM218.6 12c-.3-.1-1.7.3-1.3.6.4-.3.9-.5 1.3-.6zM189.6 11.4l-.3.6.7-.5z"
                />
              </svg>
              <span className="relative text-blue-800 dark:text-white md:px-2">
                Scale
              </span>
            </span>
          </h1>
          <p className="mt-12 text-center text-lg text-gray-600 dark:text-gray-300 sm:text-xl md:text-left lg:w-3/4">
            Computers used to be magical. But much of that magic has been lost
            over time, replaced by subpar tools and practices that slow teams
            down and hold great work back.
          </p>
        </div>
      </div>
      <div className="relative -mx-4 mt-16 flex snap-x snap-mandatory justify-between gap-6 overflow-x-auto border-y border-gray-100 px-4 py-8 dark:border-gray-800 sm:-mx-12 sm:px-12 lg:mx-0 lg:px-0">
        <div className="snap-center text-center sm:text-left">
          <div className="mx-auto mb-4 flex h-12 w-12 rounded-xl border border-primary/20 bg-white shadow-md shadow-primary/10 dark:border-gray-700 dark:bg-gray-800 sm:ml-0 sm:mr-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="m-auto h-6 w-6 text-primary dark:text-blue-300"
            >
              <path
                className="text-primaryLight"
                fillRule="evenodd"
                d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
              <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
            </svg>
          </div>
          <h2 className="mx-auto w-max text-lg font-semibold text-gray-700 dark:text-white sm:ml-0 sm:w-auto">
            The lowest price
          </h2>
          <p className="mx-auto mt-1 w-max text-gray-500 sm:ml-0 sm:w-auto">
            Some text here
          </p>
        </div>
        <div className="snap-center text-center sm:text-left">
          <div className="mx-auto mb-4 flex h-12 w-12 rounded-xl border border-purple-500/20 bg-white shadow-md shadow-purple-600/10 dark:border-gray-700 dark:bg-gray-800 sm:ml-0 sm:mr-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="m-auto h-6 w-6 text-purple-600"
            >
              <path
                className="text-purple-300"
                d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z"
              />
              <path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
            </svg>
          </div>
          <h2 className="mx-auto w-max text-lg font-semibold text-gray-700 dark:text-white sm:ml-0 sm:w-auto">
            The fastest on the market
          </h2>
          <p className="mx-auto mt-1 w-max text-gray-500 sm:ml-0 sm:w-auto">
            Some text here
          </p>
        </div>
        <div className="snap-center text-center sm:text-left">
          <div className="mx-auto mb-4 flex h-12 w-12 rounded-xl border bg-white shadow-md shadow-yellow-600/10 dark:border-gray-700 dark:bg-gray-800 sm:ml-0 sm:mr-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="m-auto h-6 w-6 text-yellow-700"
            >
              <path
                className="text-yellow-500"
                d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 01-.937-.171.75.75 0 11.374-1.453 5.261 5.261 0 002.626 0 .75.75 0 11.374 1.452 6.712 6.712 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z"
              />
              <path
                fillRule="evenodd"
                d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h2 className="mx-auto w-max text-lg font-semibold text-gray-700 dark:text-white sm:ml-0 sm:w-auto">
            The most loved
          </h2>
          <p className="mx-auto mt-1 w-max text-gray-500 sm:ml-0 sm:w-auto">
            Some text here
          </p>
        </div>
      </div>
      <div className="my-8 flex justify-between gap-6 brightness-75 contrast-200 grayscale dark:brightness-200 dark:contrast-0 md:my-16 lg:gap-12">
        <img
          src="./../images/clients/airbnb.svg"
          className="h-8 w-auto dark:brightness-200 sm:h-10 lg:h-12"
          alt="airbnb"
        />
        <img
          src="./../images/clients/ge.svg"
          className="h-8 w-auto dark:brightness-200 sm:h-10 lg:h-12"
          alt="ge"
        />
        <img
          src="./../images/clients/coty.svg"
          className="h-8 w-auto dark:brightness-0 dark:contrast-0 sm:h-10 lg:h-12"
          alt="coty"
        />
        <img
          src="./../images/clients/microsoft.svg"
          className="h-8 w-auto dark:brightness-200 sm:h-10 lg:h-12"
          alt="microsoft"
        />
      </div>
    </div>
  </section>
)

export const components: MDXComponents = {
  ...DateTimes,
  ...Heading,
  ...Lists,
  ...Media,
  ...Typography,
  img: Media.ResponsiveImage,
  h1: Heading.H1,
  h2: Heading.H2,
  h3: Heading.H3,
  ol: Lists.OrderedList,
  li: Lists.ListItem,
  p: Typography.Paragraph,
  pre: Typography.Pre,
  code: Typography.Code,
  // a: ({ ref: _ref, href, ...props }) => (
  //   <Link href={route({ pathname: href! } as Route)} {...props} />
  // ),
  Link,
}

export type LayoutProps = {
  // type?: MDXType
  HeroComp?: JSXElementConstructor<{}>
  children: ReactNode
}
const Layout = ({ children, HeroComp }: LayoutProps) => {
  // if(typeof window === 'undefined' ) {
  //   return null
  // }
  const { t } = useTranslation(["footer"])

  return (
    <>
      <Suspense fallback={<>Loading...</>}>
        <MDXProvider components={components}>
          {/* <DefaultSeo {...SEO} /> */}
          {/* <Header HeroComp={HeroComp} /> */}

          {/* <main className={styles.main}> */}

          <main
            className="min-h-screen bg-white selection:bg-primary/10 selection:text-primary dark:bg-gray-900"
            data-new-gr-c-s-check-loaded="14.1102.0"
            data-gr-ext-installed=""
          >
            <Header />

            {/* <Hero /> */}

            {/* <section className={styles.section}> */}
            {children}
            {/* </section> */}

            <Footer
            // description={t('footer:description')}
            // sections={t('footer:sections', { returnObjects: true })}
            />
          </main>
        </MDXProvider>
      </Suspense>
    </>
  )
}

export default Layout
