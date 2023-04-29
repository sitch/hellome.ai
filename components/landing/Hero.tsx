import { ReactNode } from "react"
import { useTranslation } from "next-i18next"

import BrandLogo from "@/components/ui/BrandLogo/BrandLogo"
import { AnimatedBook } from "@/components/books/AnimatedBook/AnimatedBook"
import { DotTextureIcon } from "@/components/landing/icons"

export function MottoTags() {
  return (
    <div>
      <p className="bg-teal-accent-400 mb-4 inline-block rounded-full px-3 py-px text-xs font-semibold uppercase tracking-wider text-teal-900">
        Trust
      </p>{" "}
      <p className="bg-teal-accent-400 mb-4 inline-block rounded-full px-3 py-px text-xs font-semibold uppercase tracking-wider text-teal-900">
        Love ❤️
      </p>{" "}
      <p className="bg-teal-accent-400 mb-4 inline-block rounded-full px-3 py-px text-xs font-semibold uppercase tracking-wider text-teal-900">
        {/* Connectedness */}
        Excellence
      </p>
    </div>
  )
}

export type HeroProps = {
  // title: string
  // subtitle: string | ReactNode
}

export const Hero2 = () =>
  // { title, subtitle }: HeroProps
  {
    const { t } = useTranslation("landing")

    const title = t("headline.title")
    const subtitle = t("headline.subtitle")

    return (
      <div className="mx-auto flex max-w-2xl flex-col items-center justify-center px-4 pt-16 sm:max-w-xl md:max-w-2xl md:px-8 lg:pt-32">
        <BrandLogo size="small" />

        <br />
        <br />
        <div className="prose mb-10 max-w-xl text-gray-800 sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
          {/* <MottoTags /> */}

          <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-800 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              {/* <DotTextureIcon /> */}
              <span className="relative">{title.split(" ")[0]}</span>
            </span>{" "}
            {title.split(" ").slice(1).join(" ")}
          </h2>

          <p className="text-base text-gray-700 md:text-lg">{subtitle}</p>
        </div>

        {/* <p className="mb-10 max-w-md text-xs text-gray-600 sm:text-sm md:text-center">
        {content.action.description}
      </p> */}
        {/* <Image
        // src="https://kitwind.io/assets/kometa/half-phone.png"
        src="/static/images/sitchenko-infant-drawing-bw.png"
        className="mx-auto w-full border-4 border-black md:w-auto md:max-w-xs"
        alt=""
        height={240}
        width={240}
      /> */}

        <AnimatedBook />
      </div>
    )
  }

export const Hero = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Understand User Flow.
            <span className="sm:block"> Increase Conversion. </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="/get-started"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="/about"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
