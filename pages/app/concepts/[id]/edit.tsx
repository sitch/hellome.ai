import type { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import { castArray } from "lodash"

import { Layout, Page } from "@/components/app"

import { type I18nNamespaces } from "@/i18next.d"
import i18NextConfig from "@/next-i18next.config"

const ns: (keyof I18nNamespaces)[] = ["common", "concepts", "zod", "filepond"]

type Props = {
  id: string
}

export default function Edit({
  id,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { t } = useTranslation(ns)

  // const {concept} = useConcept({id})

  return (
    <>
      <Layout>
        <Page
          title={t("concepts:page.edit.title")}
          description={t("concepts:page.edit.description")}
          // loading={isLoading}
          // skeleton={() => <DataTableSkeleton count={5} />}
          // action={
          //   <Link
          //     className={buttonVariants({
          //       size: "lg",
          //       variant: "secondary",
          //     })}
          //     href="/app/concepts/new"
          //   >
          //     {t("actions.create.label")}
          //   </Link>
          // }
        >
          Coming Soon...
        </Page>
      </Layout>
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
