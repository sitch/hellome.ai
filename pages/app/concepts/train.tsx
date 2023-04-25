import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import i18NextConfig from '@/next-i18next.config'
import { I18nNamespaces } from '@/i18next.d'
import { ConceptForm } from '@/components/forms/ConceptForm'
import { UserForm } from '@/components/forms/UserForm'
import { PageLayout } from '@/components/ui/Layout/Layout'

// import { useS3Upload } from 'next-s3-upload'

import human from '@vladmandic/human'

// import { Layout } from '@/components/common'
// import MediaPipeDemo from '@/components/vision/mediapipe/MediapipeDemo'
// import  FaceFilter  from '@/components/vision/FaceFilter'
import dynamic from 'next/dynamic'
import Canvas from '@/components/canvas'

// See: https://github.com/google/mediapipe/issues/2546
const FaceFilter = dynamic(
  () => import('@/components/vision/mediapipe/FaceFilter'),
  {
    ssr: false,
  }
)

const AlterBackground = dynamic(
  () => import('@/components/vision/mediapipe/AlterBackground'),
  {
    ssr: false,
  }
)

const ns: (keyof I18nNamespaces)[] = [
  // 'common',
  // 'company',
  // 'faq',
  // 'footer',
  // 'landing',
  // 'onboarding',
  // 'pricing',
  // 'product',
  'concepts',
  'zod',
  'filepond',
]

type Props = {
  // Add custom props here
}

const Train = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  // const { t } = useTranslation(ns)

  // let { uploadToS3, files: uploadFiles } = useS3Upload()
  // let handleFileChange = async (event) => {
  //   let file = event.target.files[0]
  //   await uploadToS3(file)
  // }

  // const [files, setFiles] = useState(tempFiles)
  // const [files, setFiles] = useState([])
  // const [files, setFiles] = useState<FilePondFile[]>()
  // const [files, setFiles] = useState<FilePondFile[]>([])
  // const [files, setFiles] = useState<((string | FilePondInitialFile | Blob | ActualFileObject)[] | undefined)[]>()

  //
  //
  //   <div className="bg-slate-900">
  //                  {/* <!-- Announcement Banner --> */}
  //                  <div className="flex justify-center">
  //                    <a
  //                      className="group inline-block rounded-full border border-white/[.05] bg-white/[.05] p-1 pl-4 shadow-md hover:bg-white/[.1]"
  //                      href="../figma.html"
  //                    >
  //                      <p className="mr-2 inline-block text-sm text-white">
  //                        Preline UI Figma is live.
  //                      </p>
  //                      <span className="inline-flex items-center justify-center gap-x-2 rounded-full bg-white/[.075] px-3 py-2 text-sm font-semibold text-white group-hover:bg-white/[.1]">
  //                        <svg
  //                          className="h-2.5 w-2.5"
  //                          width="16"
  //                          height="16"
  //                          viewBox="0 0 16 16"
  //                          fill="none"
  //                        >
  //                          <path
  //                            d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
  //                            stroke="currentColor"
  //                            strokeWidth="2"
  //                            strokeLinecap="round"
  //                          />
  //                        </svg>
  //                      </span>
  //                    </a>
  //                  </div>
  //                  {/* <!-- End Announcement Banner --> */}
  //
  //                  {/* <!-- Title --> */}
  //                  <div className="mx-auto max-w-3xl text-center">
  //                    <h1 className="block text-4xl font-medium text-gray-200 sm:text-5xl md:text-6xl lg:text-7xl">
  //                      Now it's easier than ever to build products
  //                    </h1>
  //                  </div>
  //                  {/* <!-- End Title --> */}
  //
  //                  <div className="mx-auto max-w-3xl text-center">
  //                    <p className="text-lg text-gray-400">
  //                      Preline is a large open-source project, crafted with
  //                      Tailwind CSS framework by Hmlstream.
  //                    </p>
  //                  </div>
  //
  //                  {/* <!-- Buttons --> */}
  //                  <div className="text-center">
  //                    <a
  //                      className="inline-flex items-center justify-center gap-x-3 rounded-full border border-transparent bg-gradient-to-tl from-blue-600 to-violet-600 px-6 py-3 text-center text-sm font-medium text-white shadow-lg shadow-transparent hover:shadow-blue-700/50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
  //                      href="#"
  //                    >
  //                      Get started
  //                      <svg
  //                        className="h-2.5 w-2.5"
  //                        width="16"
  //                        height="16"
  //                        viewBox="0 0 16 16"
  //                        fill="none"
  //                      >
  //                        <path
  //                          d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
  //                          stroke="currentColor"
  //                          strokeWidth="2"
  //                          strokeLinecap="round"
  //                        />
  //                      </svg>
  //                    </a>
  //                  </div>
  //                  {/* <!-- End Buttons --> */}
  //    </div>
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  // return <FaceFilter />

  return (
    <>
      <PageLayout
      // title="Concept Training"
      >
        {/*
                
              
                
              <div>

                <input onChange={handleFileChange} type="file" />

                <div className="pt-8">
                  {uploadFiles.map((file, index) => (
                    <div key={index}>
                      File #{index} progress: {file.progress}%
                    </div>
                  ))}
                </div>
              </div> 
              
              
              
              
              
              */}

        <div className="">
          <ConceptForm />
        </div>

        {/* <FaceFilter /> */}
        {/* <AlterBackground /> */}
      </PageLayout>
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

export default Train
