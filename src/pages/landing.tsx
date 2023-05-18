import type { NextPageContext } from "next"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import { type I18nNamespaces } from "i18next"
import { Home } from "lucide-react"

import AnimatedButton from "@/components/common/AnimatedButton/AnimatedButton"

import i18NextConfig from "~/next-i18next.config"

const ns: (keyof I18nNamespaces)[] = ["common"]

function Custom404() {
  const { t } = useTranslation()

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-24 pt-20 md:px-2">
        <div className="grid grid-cols-1 gap-24 md:grid-cols-2">
          <div>
            <h1 className="mb-6 text-2xl font-light text-gray-900 md:text-3xl">
              Basic Questions
            </h1>
            <p className="mb-3 mt-10 font-semibold text-gray-900">
              What is accessibility?
            </p>
            <p className="text-gray-600">
              This article starts off the module with a good look at what
              accessibility is — this includes what groups of people we need to
              consider and why, what tools different people use to interact with
              the web, and how we can make accessibility part of our web
              development workflow.
            </p>
            <p className="mb-3 mt-10 font-semibold text-gray-900">
              HTML: A good basis for accessibility?
            </p>
            <p className="text-gray-600">
              A great deal of web content can be made accessible just by making
              sure the correct HTML elements are always used for the correct
              purpose.
            </p>
            <p className="mb-3 mt-10 font-semibold text-gray-900">
              CSS and JavaScript accessibility best practices?
            </p>
            <p className="text-gray-600">
              CSS and JavaScript, when used properly, also have the potential to
              allow for accessible web experiences, but if misused they can
              significantly harm accessibility. This article outlines some CSS
              and JavaScript best practices that should be considered to ensure
              that even complex content is as accessible as possible.
            </p>
          </div>
          <div>
            <h1 className="mb-6 text-2xl font-light md:text-3xl">
              Advanced Questions
            </h1>
            <p className="mb-3 mt-10 font-semibold text-gray-900">
              WAI-ARIA basics, WAI-ARIA basics, WAI-ARIA basics, WAI-ARIA
              basics?
            </p>
            <p className="text-gray-600">
              Following on from the previous article, sometimes making complex
              UI controls that involve unsemantic HTML and dynamic
              JavaScript-updated content can be difficult. WAI-ARIA is a
              technology that can help with such problems by adding in further
              semantics that browsers and assistive technologies can recognize
              and use to let users know what is going on. Here we'll show how to
              use it at a basic level to improve accessibility.
            </p>
            <p className="mb-3 mt-10 font-semibold text-gray-900">
              Accessible multimedia?
            </p>
            <p className="text-gray-600">
              Another category of content that can create accessibility problems
              is multimedia — video, audio, and image content need to be given
              proper textual alternatives, so they can be understood by
              assistive technologies and their users. This article shows how.
            </p>
            <p className="mb-3 mt-10 font-semibold text-gray-900">
              Mobile accessibility?
            </p>
            <p className="text-gray-600">
              With web access on mobile devices being so popular, and popular
              platforms such as iOS and Android.
            </p>
          </div>
        </div>
        <div className="mt-16 text-center">
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Howto/CSS_FAQ"
            target="_blank"
            className="btn btn-link btn-lg btn-icon"
          >
            <span>Learn more on the MDN docs</span>
            <svg viewBox="0 0 20 20" fill="currentColor" className="ml-3">
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </section>
    </>
  )
}

export async function getStaticProps({
  locale = i18NextConfig.i18n.defaultLocale,
}: NextPageContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ns)),
    },
  }
}

export default Custom404
