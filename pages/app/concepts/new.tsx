import type { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import { Layout, Page } from "@/components/app"
import { ConceptForm } from "@/components/concepts/ConceptForm"

import { type I18nNamespaces } from "@/i18next.d"
import i18NextConfig from "@/next-i18next.config"

// import dynamic from "next/dynamic"
// import MediaPipeDemo from '@/components/vision/mediapipe/MediapipeDemo'
// import  FaceFilter  from '@/components/vision/FaceFilter'

// See: https://github.com/google/mediapipe/issues/2546
// const FaceFilter = dynamic(
//   () => import("@/components/vision/mediapipe/FaceFilter"),
//   {
//     ssr: false,
//   },
// )

// const AlterBackground = dynamic(
//   () => import("@/components/vision/mediapipe/AlterBackground"),
//   {
//     ssr: false,
//   },
// )

const ns: (keyof I18nNamespaces)[] = ["common", "concepts", "zod", "filepond"]

type Props = {
  // Add custom props here
}

export default function New(
  _props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  const { t } = useTranslation(ns)

  return (
    <>
      <Layout>
        <Page
          title={t("concepts:page.new.title")}
          description={t("concepts:page.new.description")}
        >
          <ConceptForm />
        </Page>
      </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale = i18NextConfig.i18n.defaultLocale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale, ns)),
  },
})
