import type { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { useTranslation } from "next-i18next"
import i18NextConfig from "next-i18next.config"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import { type I18nNamespaces } from "i18next.d"
import { XIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Layout, Page } from "@/components/app"
import { ConceptForm } from "@/components/concepts/ConceptForm"

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

  const handleRefresh = () => {
    // refetch()
  }

  return (
    <>
      <Layout onRefresh={handleRefresh}>
        <Page
          type="new"
          title={t("concepts:page.new.title")}
          description={t("concepts:page.new.description")}
          action={
            <Button
              size="lg"
              variant="secondary"
              href="/app/concepts"
              icon={XIcon}
            >
              {t("actions.cancel.label")}
            </Button>
          }
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
