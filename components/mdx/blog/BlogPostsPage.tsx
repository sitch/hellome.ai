import Link from 'next/link'







export const TopBlogPosts = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 row-gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
            20 Nov 2020
          </p>
          <div className="mb-3">
            <Link
              href="/"
              aria-label="Article"
              className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-4xl xl:text-5xl">
                What it means when a man falls from outer space
              </p>
            </Link>
          </div>
          <p className="mb-4 text-base text-gray-700 md:text-lg">
            Call it magical realism, call it realistic fantasy—call it whatever
            you want, but Arimah's playfully subversive style is wholly her own.
          </p>
          <div className="flex items-center">
            <Link href="/" aria-label="Author" className="mr-3">
              <img
                alt="avatar"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                className="object-cover w-10 h-10 rounded-full shadow-sm"
              />
            </Link>
            <div>
              <Link
                href="/"
                aria-label="Author"
                className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Petru Vîrtos
              </Link>
              <p className="text-sm font-medium leading-4 text-gray-600">
                Author
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-8 lg:col-span-3">
          <div>
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
              14 Jul 2020
            </p>
            <div className="mb-3">
              <Link
                href="/"
                aria-label="Article"
                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                  Mascarpone cheese triangles taleggio
                </p>
              </Link>
            </div>
            <p className="mb-4 text-base text-gray-700 md:text-lg">
              Brie cheese triangles cheesecake. Cauliflower cheese cheese and
              wine manchego bocconcini croque monsieur queso airedale brie.
            </p>
            <div className="flex items-center">
              <Link href="/" aria-label="Author" className="mr-3">
                <img
                  alt="avatar"
                  src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  className="object-cover w-10 h-10 rounded-full shadow-sm"
                />
              </Link>
              <div>
                <Link
                  href="/"
                  aria-label="Author"
                  className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Alex Stratulat
                </Link>
                <p className="text-sm font-medium leading-4 text-gray-600">
                  Author
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
              18 Mar 2020
            </p>
            <div className="mb-3">
              <Link
                href="/"
                aria-label="Article"
                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                  The quick, brown fox jumps over a lazy dog
                </p>
              </Link>
            </div>
            <p className="mb-4 text-base text-gray-700 md:text-lg">
              "A kitten, a nice little, sleek playful kitten, that I can play
              with, and teach, and feed--and feed--and feed!" I was not
              unprepared for this request, for I had noticed how his pets went
              on increasing in size.
            </p>
            <div className="flex items-center">
              <Link href="/" aria-label="Author" className="mr-3">
                <img
                  alt="avatar"
                  src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                  className="object-cover w-10 h-10 rounded-full shadow-sm"
                />
              </Link>
              <div>
                <Link
                  href="/"
                  aria-label="Author"
                  className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Susie the Cat
                </Link>
                <p className="text-sm font-medium leading-4 text-gray-600">
                  Author
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};




export type BlogPostsPageProps = {
  posts: object[]
}

export const BlogPostsPage = ({ posts }: BlogPostsPageProps) => {
  return (
    <>
    <TopBlogPosts />
    <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <div className="grid gap-5 sm:mx-auto sm:max-w-sm lg:max-w-full lg:grid-cols-3">
        <div className="overflow-hidden rounded bg-white transition-shadow duration-300">
          <Link href="/" aria-label="Article">
            <img
              src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              className="h-64 w-full rounded object-cover"
              alt=""
            />
          </Link>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold uppercase text-gray-600">
              13 Jul 2020
            </p>
            <Link
              href="/"
              aria-label="Article"
              className="mb-3 inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">Diving to the deep</p>
            </Link>
            <p className="mb-4 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <div className="flex space-x-4">
              <Link
                href="/"
                aria-label="Likes"
                className="group flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                  >
                    <polyline
                      points="6 23 1 23 1 12 6 12"
                      fill="none"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <p className="font-semibold">7.4K</p>
              </Link>
              <Link
                href="/"
                aria-label="Comments"
                className="group flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-5 w-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                  >
                    <polyline
                      points="23 5 23 18 19 18 19 22 13 18 12 18"
                      fill="none"
                      strokeMiterlimit="10"
                    />
                    <polygon
                      points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <p className="font-semibold">81</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded bg-white transition-shadow duration-300">
          <Link href="/" aria-label="Article">
            <img
              src="https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              className="h-64 w-full rounded object-cover"
              alt=""
            />
          </Link>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold uppercase text-gray-600">
              4 Nov 2020
            </p>
            <Link
              href="/"
              aria-label="Article"
              className="mb-3 inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">Conquer the World</p>
            </Link>
            <p className="mb-4 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <div className="flex space-x-4">
              <Link
                href="/"
                aria-label="Likes"
                className="group flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                  >
                    <polyline
                      points="6 23 1 23 1 12 6 12"
                      fill="none"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <p className="font-semibold">7.4K</p>
              </Link>
              <Link
                href="/"
                aria-label="Comments"
                className="group flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-5 w-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                  >
                    <polyline
                      points="23 5 23 18 19 18 19 22 13 18 12 18"
                      fill="none"
                      strokeMiterlimit="10"
                    />
                    <polygon
                      points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <p className="font-semibold">81</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded bg-white transition-shadow duration-300">
          <Link href="/" aria-label="Article">
            <img
              src="https://images.pexels.com/photos/2123755/pexels-photo-2123755.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="h-64 w-full rounded object-cover"
              alt=""
            />
          </Link>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold uppercase text-gray-600">
              28 Dec 2020
            </p>
            <Link
              href="/"
              aria-label="Article"
              className="mb-3 inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">
                Explore the beautiful
              </p>
            </Link>
            <p className="mb-4 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <div className="flex space-x-4">
              <Link
                href="/"
                aria-label="Likes"
                className="group flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                  >
                    <polyline
                      points="6 23 1 23 1 12 6 12"
                      fill="none"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <p className="font-semibold">7.4K</p>
              </Link>
              <Link
                href="/"
                aria-label="Comments"
                className="group flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-5 w-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                  >
                    <polyline
                      points="23 5 23 18 19 18 19 22 13 18 12 18"
                      fill="none"
                      strokeMiterlimit="10"
                    />
                    <polygon
                      points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <p className="font-semibold">81</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
