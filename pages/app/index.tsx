import type { GetServerSideProps } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import { Button } from "@/components/ui/button"
import { Layout, Page } from "@/components/app"

import { type I18nNamespaces } from "@/i18next.d"
import i18NextConfig from "@/next-i18next.config"

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   // track submissions so we can show a spinner while waiting for the next prediction to be created
//   setSubmissionCount(submissionCount + 1);

//   const prompt = e.target.prompt.value
//     .split(/\s+/)
//     .map((word) => (naughtyWords.en.includes(word) ? "something" : word))
//     .join(" ");

//   setError(null);
//   setIsProcessing(true);

//   const fileUrl = await uploadFile(scribble);

//   const body = {
//     prompt,
//     image: fileUrl,
//     structure: "scribble",
//   };

//   const response = await fetch("/api/predictions", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(body),
//   });
//   let prediction = await response.json();

//   setPredictions((predictions) => ({
//     ...predictions,
//     [prediction.id]: prediction,
//   }));

//   if (response.status !== 201) {
//     setError(prediction.detail);
//     return;
//   }

//   while (
//     prediction.status !== "succeeded" &&
//     prediction.status !== "failed"
//   ) {
//     await sleep(500);
//     const response = await fetch("/api/predictions/" + prediction.id);
//     prediction = await response.json();
//     setPredictions((predictions) => ({
//       ...predictions,
//       [prediction.id]: prediction,
//     }));
//     if (response.status !== 200) {
//       setError(prediction.detail);
//       return;
//     }
//   }

//   setIsProcessing(false);
// };

const ns: (keyof I18nNamespaces)[] = ["common", "concepts", "zod", "filepond"]

type Props = {
  // add
}

export default function AppIndex() {
  const { t } = useTranslation(ns)

  // const {concept} = useConcept({id})

  const handleRefresh = () => {
    // refetch()
  }

  const handleClick = async () => {
    // refetch()

    const prompt = ""
    const fileUrl = "https://hellome.ai/apple-touch-icon-1024x1024.png"

    const body = {
      prompt,
      image: fileUrl,
      structure: "scribble",
    }

    const response = await fetch("/api/ai/replicate/predictions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })

    const prediction = await response.json()

    console.log({ prediction })
  }

  return (
    <>
      <Layout onRefresh={handleRefresh}>
        <Page
          type="index"
          // title={t("concepts:page.edit.title")}
          // description={t("concepts:page.edit.description")}
          // loading={isLoading}
          // skeleton={() => <DataTableSkeleton count={5} />}
          action={
            <Button
              size="lg"
              variant="secondary"
              href="/app/concepts"
              onClick={handleClick}
              // icon={XCircle}
            >
              {/* {t("actions.cancel.label")} */}
              Demo
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
  locale = i18NextConfig.i18n.defaultLocale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale, ns)),
  },
})
