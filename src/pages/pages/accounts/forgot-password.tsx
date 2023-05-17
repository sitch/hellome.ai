export default function ForgotPassword() {
  return (
    <section className="bg-white">
      <div className="relative mx-auto w-full max-w-7xl items-center px-5 py-12 md:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-xl p-8 text-center">
          <div>
            <h2 className="text-4xl tracking-tighter text-black">
              Forgot your password?
            </h2>
          </div>
          <div className="mt-8">
            <div className="mt-6">
              <form action="#" method="POST" className="space-y-2">
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
                    className="block w-full appearance-none rounded-full border border-gray-200 bg-white px-6 py-3 text-center text-black placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    placeholder="email@example.com"
                    autoComplete="off"
                    type="email"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-full border-2 border-black bg-black px-6 py-2.5 text-center text-sm text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black"
                  >
                    <span> Submit </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
