import { Suspense, useEffect, useState } from "react"
import type { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

// import { Steps } from "react-daisyui"
// import { ConceptForm } from "@/components/concepts/ConceptForm"

import { WavesIcon, XIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Layout, Page } from "@/components/app"
import { BookCustomizer } from "@/components/books/BookCustomizer/BookCustomizer"
import { StarsOverlay } from "@/components/common/StarsOverlay/StarsOverlay"

import { LogoMesh } from "@/scenes/meshes/LogoMesh"

import { type I18nNamespaces } from "~/i18next.d"
import i18NextConfig from "~/next-i18next.config"

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

  const [ready, setReady] = useState(false)

  useEffect(() => setReady(true), [])

  if (!ready) {
    return null
  }

  return (
    <div id="root" className=" h-screen w-screen overflow-hidden">
      {/* <StarsOverlay /> */}

      <BookCustomizer />
    </div>
  )

  // return (

  //   <LogoMesh />
  // )

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
          {/* <StarsOverlay /> */}

          {/* <BookCustomizer /> */}

          <section className="body-font text-gray-600">
            <div className="container mx-auto flex flex-col flex-wrap px-5 py-24">
              <div className="mx-auto mb-20 flex flex-wrap">
                <a className="title-font inline-flex w-1/2 items-center justify-center rounded-t border-b-2 border-indigo-500 bg-gray-100 py-3 font-medium leading-none tracking-wider text-indigo-500 sm:w-auto sm:justify-start sm:px-6">
                  <WavesIcon
                    className="mr-3 h-5 w-5"

                    // fill="none"
                    // stroke="currentColor"
                    // strokeLinecap="round"
                    // strokeLinejoin="round"
                    // strokeWidth={2}
                    // viewBox="0 0 24 24"
                  />
                  Add Mom
                </a>
                <a className="title-font inline-flex w-1/2 items-center justify-center border-b-2 border-gray-200 py-3 font-medium leading-none tracking-wider hover:text-gray-900 sm:w-auto sm:justify-start sm:px-6">
                  <WavesIcon className="mr-3 h-5 w-5" />
                  Add Dad
                </a>
                <a className="title-font inline-flex w-1/2 items-center justify-center border-b-2 border-gray-200 py-3 font-medium leading-none tracking-wider hover:text-gray-900 sm:w-auto sm:justify-start sm:px-6">
                  <WavesIcon className="mr-3 h-5 w-5" />
                  Add Child
                </a>
                <a className="title-font inline-flex w-1/2 items-center justify-center border-b-2 border-gray-200 py-3 font-medium leading-none tracking-wider hover:text-gray-900 sm:w-auto sm:justify-start sm:px-6">
                  <WavesIcon className="mr-3 h-5 w-5" />
                  Preview
                </a>
              </div>
              <img
                className="mx-auto mb-10 block w-2/3 rounded object-cover object-center md:w-1/2 lg:w-1/3 xl:w-1/4"
                alt="hero"
                src="https://dummyimage.com/720x600"
              />
              <div className="flex w-full flex-col text-center">
                <h1 className="title-font mb-4 text-xl font-medium text-gray-900">
                  Master Cleanse Heirloom
                </h1>
                <p className="mx-auto text-base leading-relaxed lg:w-2/3">
                  Whatever cardigan tote bag tumblr hexagon brooklyn
                  asymmetrical gentrify, subway tile poke farm-to-table. you
                  probably haven't heard of them man bun deep selfies heirloom
                  prism food truck ugh squid celiac .
                </p>
              </div>
            </div>
          </section>

          <div className="alj ard arn ces dcw">
            <div>
              <h4 className="t">Status</h4>
              <p className="avv avz axq">Migrating MySQL database...</p>
              <div className="lf" aria-hidden="true">
                <div className="adb adn aig">
                  <div className="nh adn ajm" style={{ width: "37.5%" }} />
                </div>
                <div className="lf ly yf avv avz axn bxk">
                  <div className="ayc">Copying files</div>
                  <div className="avg ayc">Migrating database</div>
                  <div className="avg">Compiling assets</div>
                  <div className="avh">Deployed</div>
                </div>
              </div>
            </div>
          </div>

          <ul className="steps">
            <li className="step-primary step">Register</li>
            <li className="step-primary step">Choose plan</li>
            <li className="step">Purchase</li>
            <li className="step">Receive Product</li>
          </ul>

          {/* <Steps>
            <Steps.Step color="primary">Register</Steps.Step>
            <Steps.Step color="primary">Choose plan</Steps.Step>
            <Steps.Step>Purchase</Steps.Step>
            <Steps.Step>Receive Product</Steps.Step>
          </Steps> */}

          {/* <ConceptForm /> */}
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
