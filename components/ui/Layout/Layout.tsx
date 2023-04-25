import { ReactNode } from 'react'

type Props = {
  title?: ReactNode
  children: ReactNode
  // Add custom props here
}

export const PageLayout = ({ title, children }: Props) => {
  return (
    <div className="container m-auto h-screen overflow-auto overflow-y-scroll bg-white">
      <div className=" m-auto h-full max-h-full  px-4 py-6 ">
        {title ? (
          <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
            <div className="mx-auto max-w-[85rem] space-y-8 px-4 py-24 sm:px-6 lg:px-8">
              <div className="prose  text-center">
                <h1 className="prose-h1">{title}</h1>
              </div>
            </div>
          </div>
        ) : null}

        {/* <div className="justify-center"> */}
        {children}
        {/* </div> */}
      </div>
    </div>
  )

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

  return (
    <>
      <section>
        <div className="full-h mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          {/* <!-- Hero --> */}
          <div
          // className="bg-slate-900"
          >
            <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
              <div className="mx-auto max-w-[85rem] space-y-8 px-4 py-24 sm:px-6 lg:px-8">
                {children}
              </div>
            </div>
          </div>

          {/* <!-- End Hero --> */}
        </div>
      </section>
    </>
  )
}
