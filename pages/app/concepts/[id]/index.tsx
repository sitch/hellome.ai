import type { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import { PageLayout } from "@/components/ui/Layout/Layout"

import { type I18nNamespaces } from "@/i18next.d"
import i18NextConfig from "@/next-i18next.config"

// import { useS3Upload } from 'next-s3-upload'

const ns: (keyof I18nNamespaces)[] = ["common", "concepts", "zod", "filepond"]

type Props = {
  // Add custom props here
}

const Page = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>,
) => {
  // const { t } = useTranslation(ns)

  return (
    <>
      <PageLayout title="Create Concept">Concept!</PageLayout>
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

export default Page
