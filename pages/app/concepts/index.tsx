import { useState } from "react"
import type { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import { Plus } from "lucide-react"

import { api } from "@/utils/api"

import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/ui/data-table"
import Paginator from "@/components/ui/pagination"
import { Layout, Page } from "@/components/app"
import { DataTableSkeleton } from "@/components/app/data-table-skeleton"
import { columns } from "@/components/concepts/columns"

import { type I18nNamespaces } from "@/i18next.d"
import i18NextConfig from "@/next-i18next.config"

const ns: (keyof I18nNamespaces)[] = ["common", "concepts", "zod", "filepond"]

type Props = {
  // Add custom props here
}

export default function Index(
  _props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  const { t } = useTranslation(ns)
  const [page, setPage] = useState<number>(0)
  const [totalPages, setTotalPages] = useState<number>(1)

  const { data, isLoading, refetch, ...query } = api.concept.paginate.useQuery({
    limit: 20,
  })

  const handleRefresh = () => {
    refetch()
  }

  // useEffect(() => {
  //   query.refetch({cursor: page})
  // }, [page])

  // const rows = data?.pages[page].items ?? []
  const rows = data?.items ?? []

  return (
    <>
      <Layout onRefresh={handleRefresh}>
        <Page
          type="index"
          title={t("concepts:page.index.title")}
          description={t("concepts:page.index.description")}
          loading={isLoading}
          skeleton={() => <DataTableSkeleton count={5} />}
          action={
            <Button
              size="lg"
              variant="secondary"
              href="/app/concepts/new"
              icon={Plus}
              shadow="hover"
            >
              {t("actions.create.label")}
            </Button>
          }
        >
          <DataTable
            columns={columns}
            data={rows}

            // data={[{id: 1}]}
          />

          <Paginator
            currentPage={page}
            setCurrentPage={(page) => setPage(page)}
            totalPages={totalPages}
            middlePagesSiblingCount={2}
            edgePageCount={2}
          />
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
