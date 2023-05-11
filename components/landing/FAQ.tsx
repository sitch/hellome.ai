import { useState, type ReactNode } from "react"
import Link, { type LinkProps } from "next/link"

import { DotTextureIcon, ZapIcon } from "@/components/landing/icons"

type AnsweredQuestionProps = {
  question: string
  answer: ReactNode
}

const AnsweredQuestion = ({ question, answer }: AnsweredQuestionProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="rounded border shadow-sm">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex w-full items-center justify-between p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{question}</p>
        <div className="flex h-8 w-8 items-center justify-center rounded-full border">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  )
}

export type FAQProps = {
  title: string
  icon?: ReactNode
  description: string
  links: LinkProps[]
  answers: AnsweredQuestionProps[]
}

export const FAQ = ({
  title,
  description,
  answers,
  links,
  icon = <ZapIcon />,
}: FAQProps) => {
  return (
    <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="mb-16 flex flex-col sm:text-center">
          <Link href="/" aria-label="FAQ" className="mb-6 sm:mx-auto">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50">
              {icon}
            </div>
          </Link>
          <div className="max-w-xl sm:text-center md:mx-auto lg:max-w-2xl">
            <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <DotTextureIcon />
                <span className="relative">{title.split(" ")[0]}</span>
              </span>{" "}
              {title.split(" ").slice(1).join(" ")}
            </h2>
            <p className="text-base text-gray-700 md:text-lg">{description}</p>

            <div className="mt-4 flex flex-col sm:text-center">
              {links.map(({ children, ...props }, index) => (
                <Link key={index} {...props}>
                  {children}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          {answers.map((props, index) => (
            <AnsweredQuestion key={index} {...props} />
          ))}
        </div>
      </div>
    </div>
  )
}
