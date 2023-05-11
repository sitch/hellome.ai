import { type ReactNode } from "react"

import Loader from "@/components/app/loader"

// import { useTranslation } from "next-i18next"

function PageHeader() {
  return (
    //   <div className="bg-slate-900">
    //                  {/* <!-- Announcement Banner --> */}
    //                  <div className="flex justify-center">
    //                    <a
    //                      className="group inline-block rounded-full border border-white/[.05] bg-white/[.05] p-1 pl-4 shadow-md hover:bg-white/[.1]"
    //                      href="../figma.html"
    //                    >
    //                      <p className="mr-2 inline-block text-sm text-white">
    //                         UI Figma is live.
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
    //                      Pre-line is a large open-source project, crafted with
    //                      Tailwind CSS framework by .
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

    <>PageHeader</>
  )
}

type PageProps = {
  title?: ReactNode
  loading?: boolean
  description?: ReactNode
  action?: ReactNode
  skeleton?: () => ReactNode
  children: ReactNode
}

export function Page({
  title,
  loading = false,
  description,
  action,
  children,
  skeleton = () => <Loader />,
}: PageProps) {
  // const { t } = useTranslation()

  return (
    //   <div className="bg-gray-50 dark:bg-gray-900">
    //   <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-16 lg:px-8">
    //     <div className="mx-auto max-w-full">
    //       <ConceptForm />
    //     </div>
    //   </div>
    // </div>

    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex items-start justify-between gap-2">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          {title ? (
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
              {title}
            </h1>
          ) : null}

          {/* <br className="hidden sm:inline" /> */}
          {description ? (
            <p className="text-muted-foreground max-w-[700px] p-2 text-lg sm:text-xl">
              {description}
            </p>
          ) : null}
        </div>

        {action ? <div className="flex gap-4">{action}</div> : null}
      </div>

      <div className="container mx-auto py-10">
        {loading ? skeleton() : children}
      </div>
    </section>
  )
}
