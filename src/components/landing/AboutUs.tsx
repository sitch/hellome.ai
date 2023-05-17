import { type ReactNode } from "react"
import Link from "next/link"

import { DotTextureIcon, ZapIcon } from "@/components/landing/icons"

export type AboutUsValueProps = {
  icon?: ReactNode
  title: string
}

export const AboutUsValue = ({
  title,
  icon = <ZapIcon />,
}: AboutUsValueProps) => (
  <div className="inline-block p-8 text-center">
    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50">
      {icon}
    </div>
    <p className="font-bold tracking-wide text-gray-800">{title}</p>
  </div>
)

export type AboutUsProps = {
  title: string
  description: string
  values: AboutUsValueProps[]
}

export const AboutUs = ({ title, description, values }: AboutUsProps) => {
  return (
    <div className="mb-16">
      {/* <div className="bg-gray-100">
        <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
          <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
            <div>
              <p className="mb-4 inline-block rounded-full bg-teal-accent-400 px-3 py-px text-xs font-semibold uppercase tracking-wider text-teal-900">
                Brand new
              </p>
            </div>
            <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <DotTextureIcon />
                <span className="relative">{title.split(' ').slice(-1)}</span>
              </span>{' '}
              {title.split(' ').slice(0, -1).join(' ')}
            </h2>
            <p className="text-base text-gray-700 md:text-lg">{description}</p>
          </div>
          <div className="flex items-center sm:justify-center">
            <button
              type="submit"
              className="mr-6 inline-flex h-12 items-center justify-center rounded bg-deep-purple-accent-400 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </button>
            <Link
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div> */}

      <div className="relative px-4 sm:px-0">
        <div className="absolute inset-0 h-1/2 bg-gray-100" />
        <div className="relative mx-auto grid divide-y overflow-hidden rounded bg-white shadow sm:max-w-screen-sm sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:max-w-screen-md">
          {values.map((props, index) => (
            <AboutUsValue key={index} {...props} />
          ))}
        </div>
      </div>
    </div>
  )
}
