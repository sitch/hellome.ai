import type { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import { castArray } from "lodash"
import { Edit } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Layout, Page } from "@/components/app"

import { type I18nNamespaces } from "@/i18next.d"
import i18NextConfig from "@/next-i18next.config"

const ns: (keyof I18nNamespaces)[] = ["common", "concepts", "zod", "filepond"]

type Props = {
  id: string
}

export default function Show({
  id,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { t } = useTranslation(ns)

  // const {concept} = useConcept({id})

  const handleRefresh = () => {
    // refetch()
  }

  return (
    <>
      <Layout onRefresh={handleRefresh}>
        <Page
          type="show"
          title={t("concepts:page.show.title")}
          description={t("concepts:page.show.description")}
          // loading={isLoading}
          // skeleton={() => <DataTableSkeleton count={5} />}
          action={
            <Button
              icon={Edit}
              size="lg"
              variant="secondary"
              href={{
                pathname: "/app/concepts/[id]/edit",
                query: { id },
              }}
            >
              {t("actions.edit.label")}
            </Button>
          }
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
