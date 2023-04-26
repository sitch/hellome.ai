export default function ResetPassword() {
  return (
    <section className="bg-white">
      <div className="relative mx-auto w-full max-w-7xl items-center px-5 py-12 md:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
          <div className="flex flex-col">
            <div>
              <h2 className="text-4xl text-black">Reset password</h2>
            </div>
          </div>
          <form>
            <input
              autoComplete="false"
              name="hidden"
              style={{ display: 'none' }}
            />
            <input
              name="_redirect"
              type="hidden"
              defaultValue="https://jamstacker.studio/thankyou"
            />
            <div className="mt-4 space-y-6">
              <div className="col-span-full">
                <label
                  className="mb-3 block text-sm font-medium text-gray-600"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="block w-full appearance-none rounded-full border border-gray-200 bg-white px-6 py-3 text-black placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="******"
                  autoComplete="off"
                  id="password"
                  type="password"
                />
              </div>
              <div className="col-span-full">
                <label
                  className="mb-3 block text-sm font-medium text-gray-600"
                  htmlFor="password"
                >
                  Confirm password
                </label>
                <input
                  id="password"
                  className="block w-full appearance-none rounded-full border border-gray-200 bg-white px-6 py-3 text-black placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="******"
                  autoComplete="off"
                  type="password"
                />
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
    </section>
  )
}
