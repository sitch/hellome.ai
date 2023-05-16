import Link from "next/link"

export default function Error500() {
  return (
    <div className="flex min-h-screen bg-black">
      <div className="flex flex-1 flex-col justify-center p-8 md:px-12 lg:flex-none lg:px-24">
        <div className="mx-auto w-full lg:max-w-6xl">
          <div className="max-w-xl lg:p-10">
            <div>
              <p className="text-4xl text-white ">Error 500</p>
              <p className="mt-4 max-w-xl text-lg tracking-tight text-gray-400">
                {/* Please check the URL in the address bar and try again. */}
                An error occurred
              </p>
            </div>
            <div className="mt-10 flex gap-3">
              <Link
                className="inline-flex w-full items-center justify-center rounded-full border-2 border-black bg-black px-6 py-2.5 text-center text-sm text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto"
                href="/"
              >
                Go Home
              </Link>
              {/* <a
                className="inline-flex items-center text-sm font-semibold leading-6 text-gray-900"
                href="#"
              >
                <span> Naked button </span>
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="ml-3 h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <video
          autoPlay={true}
          className="absolute z-10 min-h-full w-auto min-w-full max-w-none bg-white/50"
          loop={true}
          muted={true}
        >
          <source
            src="https://buio.lexingtonthemes.com/images/placeholders/gradient.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
