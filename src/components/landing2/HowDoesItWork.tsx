import { type ReactNode } from "react"
import Link from "next/link"

import bookCover from "public/images/sitchenko-infant-drawing-bw.png"

import { Book } from "@/components/books/Book/Book"
import { ArrowRightIcon, DotTextureIcon } from "@/components/landing2/icons"

export type StepProps = {
  title: string
  description?: string
  icon?: ReactNode
  isLast?: boolean
}

export const Step = ({
  title,
  description,
  icon,
  isLast = false,
}: StepProps) => (
  <>
    <div className="relative text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 sm:h-20 sm:w-20">
        {icon}
      </div>
      <h2 className="mb-2 text-2xl font-extrabold">{title}</h2>
      <p className="mb-3 max-w-md text-sm text-gray-900 sm:mx-auto">
        {description}
      </p>
      <Link
        href="/"
        aria-label={title}
        className="text-deep-purple-accent-400 hover:text-deep-purple-800 inline-flex items-center font-semibold transition-colors duration-200"
      >
        Learn more
      </Link>
      <div className="right-0 top-0 flex h-24 items-center justify-center lg:absolute lg:-mr-8">
        {!isLast && <ArrowRightIcon />}
      </div>
    </div>
  </>
)

export type HowDoesItWorkProps = {
  title: string
  description: string
  steps: StepProps[]
}
export const HowDoesItWork = ({
  title,
  description,
  steps,
}: HowDoesItWorkProps) => {
  return (
    <>
      <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
        <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
          {/* <div>
            <p className="mb-4 inline-block rounded-full bg-teal-accent-400 px-3 py-px text-xs font-semibold uppercase tracking-wider text-teal-900">
              Brand new
            </p>
          </div> */}
          <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <DotTextureIcon />
              <span className="relative">{title.split(" ")[0]}</span>
            </span>{" "}
            {title.split(" ").slice(1).join(" ")}
          </h2>
          <p className="text-base text-gray-700 md:text-lg">{description}</p>
        </div>

        <div className="row-gap-0 grid gap-8 lg:grid-cols-3">
          {steps.map((props, index) => (
            <Step key={index} {...props} isLast={index + 1 === steps.length} />
          ))}
        </div>
      </div>
      <Book src={bookCover} alt="sitchenko-infant-drawing-bw" />
    </>
  )
}
