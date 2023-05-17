import type { NextPageContext } from "next"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "next-i18next"
import i18NextConfig from "next-i18next.config"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import { type I18nNamespaces } from "i18next"
import { Home } from "lucide-react"

import AnimatedButton from "@/components/common/AnimatedButton/AnimatedButton"

const ns: (keyof I18nNamespaces)[] = ["common"]

function Custom404() {
  const { t } = useTranslation()

  return (
    <>
      <div className="grid h-screen place-content-center bg-white px-4">
        <div className="text-center">
          <Image
            src="/static/images/404.png"
            height={600}
            width={600}
            alt="Cow Drawing"
          />

          <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("404.title")}
          </h1>

          <p className="mt-4 text-gray-500">{t("404.description")}</p>

          <div className="pt-6 text-center">
            <Link href={t("404.link.href")}>
              <AnimatedButton icon={Home}>{t("404.link.label")}</AnimatedButton>
            </Link>
          </div>
        </div>
      </div>
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
