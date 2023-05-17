import Image from "next/image"

export default function SignUp() {
  return (
    <section>
      <div className="relative flex max-h-full justify-center overflow-hidden md:px-12 lg:px-0">
        <div className="relative z-10 flex flex-1 flex-col bg-white px-4 py-10 shadow-2xl sm:justify-center md:flex-none md:px-28 lg:py-24">
          <div className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
            <div className="flex flex-col">
              <div>
                <h2 className="text-4xl text-black">Let's get started!</h2>
                <p className="mt-2 text-sm text-gray-500">
                  Complete the details below so I can process your request and
                  then schedule a time to discuss your goals.
                </p>
              </div>
            </div>
            <form>
              <input
                autoComplete="false"
                name="hidden"
                style={{ display: "none" }}
              />
              <input name="_redirect" type="hidden" defaultValue="#" />
              <div className="mt-4 space-y-6">
                <div>
                  <label
                    className="mb-3 block text-sm font-medium text-gray-600"
                    // name="name"
                    htmlFor="name"
                  >
                    First name
                  </label>
                  <input
                    id="name"
                    className="block w-full appearance-none rounded-xl border border-gray-200 bg-white px-6 py-3 text-black placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div className="col-span-full">
                  <label
                    className="mb-3 block text-sm font-medium text-gray-600"
                    // name="company"
                    htmlFor="company"
                  >
                    What is the name of your company / organization?
                  </label>
                  <input
                    id="company"
                    className="block w-full appearance-none rounded-xl border border-gray-200 bg-white px-6 py-3 text-black placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    placeholder="Company name"
                  />
                </div>
                <div className="col-span-full">
                  <label
                    className="mb-3 block text-sm font-medium text-gray-600"
                    // name="email"
                    htmlFor="email"
                  >
                    How shall we contact you?
                  </label>
                  <input
                    id="email"
                    className="block w-full appearance-none rounded-xl border border-gray-200 bg-white px-6 py-3 text-black placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    placeholder="email@example.com"
                    autoComplete="off"
                    type="email"
                  />
                </div>
                <div>
                  <div>
                    <label
                      className="mb-3 block text-sm font-medium text-gray-600"
                      // name="message"
                      htmlFor="message"
                    >
                      Project details
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        className="block w-full appearance-none rounded-xl border border-gray-200 bg-white px-6 py-3 text-black placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                        placeholder="What are you working on?"
                        rows={4}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-full">
                  <button
                    className="inline-flex w-full items-center justify-center rounded-full border-2 border-black bg-black px-6 py-2.5 text-center text-sm text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black"
                    type="submit"
                  >
                    Submit your request
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden bg-white sm:contents lg:relative lg:block lg:flex-1">
          <div
            className="absolute inset-0 h-full w-full bg-black object-cover"
            // height={1866}
            // width={1664}
          >
            <Image
              className="m-auto h-auto w-auto bg-black bg-repeat object-center invert"
              // className="object-center w-full h-auto bg-gray-200 invert"
              src="/images/404.png"
              // width={1310}
              // height={873}
              height={600}
              width={600}
              alt="Cow Drawing"
            />

            {/* <img
            className="object-center w-full h-auto bg-gray-200"
            src="https://d33wubrfki0l68.cloudfront.net/64c901dbc4b16388ef27646a320ad9c1441594df/236fd/images/placeholders/rectangle2.svg"
            alt=""
            width={1310}
            height={873}
          /> */}
          </div>
        </div>
      </div>
    </section>
  )
}
