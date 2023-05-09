import type { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import { castArray } from "lodash"

import { PageLayout } from "@/components/ui/Layout/Layout"

import { type I18nNamespaces } from "@/i18next.d"
import i18NextConfig from "@/next-i18next.config"

// import { useS3Upload } from 'next-s3-upload'

const ns: (keyof I18nNamespaces)[] = ["common", "concepts", "zod", "filepond"]

type Props = {
  id: string
}

const Page = ({
  id,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // const {concept} = useConcept({id})

  // const { t } = useTranslation(ns)

  return (
    <>
      <PageLayout title="Edit Concept">
        {/* <ConceptForm concept={concept} /> */}
      </PageLayout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query: { id },
  locale = i18NextConfig.i18n.defaultLocale,
}) => ({
  props: {
    id: castArray(id ?? "").join("/"),
    ...(await serverSideTranslations(locale, ns)),
  },
})

export default Page
