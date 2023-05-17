// import { Reviews } from '@/components/landing/Reviews'
// import { Subscribe } from '@/components/landing/Subscribe'

import type { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import { Bot, HelpCircle, ScanFace, Truck } from "lucide-react"
import { A11y, Navigation, Pagination, Scrollbar } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import { FAQ } from "@/components/landing/FAQ"
import { Features } from "@/components/landing/Features"
import { Footer } from "@/components/landing/Footer"
import Header from "@/components/landing/Header"
import { Hero } from "@/components/landing/Hero"
import { HowDoesItWork } from "@/components/landing/HowDoesItWork"

import { type I18nNamespaces } from "~/i18next.d"
import i18NextConfig from "~/next-i18next.config"

// Import Swiper styles
import Team from "@/components/landing/Team"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

const ns: (keyof I18nNamespaces)[] = [
  "common",
  "company",
  "faq",
  "footer",
  "landing",
  "onboarding",
  "pricing",
  "product",
]
// const ns = ['common', 'footer']

type Props = {
  // Add custom props here
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale = i18NextConfig.i18n.defaultLocale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale, ns)),
  },
})

const Landing = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>,
) => {
  const { t } = useTranslation(ns)

  const swiperProps = {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 32,
    autoplay: {
      delay: 8000,
    },
    breakpoints: {
      640: {
        centeredSlides: true,
        slidesPerView: 1.25,
      },
      1024: {
        centeredSlides: false,
        slidesPerView: 1.5,
      },
    },
    navigation: {
      nextEl: ".next-button",
      prevEl: ".prev-button",
    },
  }

  return (
    <>
      {/* <NextSeo
      title="Using More of Config"
      description="This example uses more of the available config options."
      canonical="https://www.canonical.ie/"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'Open Graph Title',
        description: 'Open Graph Description',
        images: [
          {
            url: 'https://www.example.ie/og-image-01.jpg',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
            type: 'image/jpeg',
          },
          {
            url: 'https://www.example.ie/og-image-02.jpg',
            width: 900,
            height: 800,
            alt: 'Og Image Alt Second',
            type: 'image/jpeg',
          },
          { url: 'https://www.example.ie/og-image-03.jpg' },
          { url: 'https://www.example.ie/og-image-04.jpg' },
        ],
        siteName: 'SiteName',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    /> */}
      <main data-cy="LandingPage">
        <Header />

        {/* <section className={styles.section}> */}
        <Hero
        // title={t('landing:headline.title')}
        // subtitle={t('landing:headline.subtitle')}
        />
        {/* </section> */}
        {/* <section className={styles.section}> */}

        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            {/* <!-- Hero --> */}
            <div className="bg-slate-900">
              <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
                <div className="mx-auto max-w-[85rem] space-y-8 px-4 py-24 sm:px-6 lg:px-8">
                  {/* <!-- Announcement Banner --> */}
                  <div className="flex justify-center">
                    <a
                      className="group inline-block rounded-full border border-white/[.05] bg-white/[.05] p-1 pl-4 shadow-md hover:bg-white/[.1]"
                      href="../figma.html"
                    >
                      <p className="mr-2 inline-block text-sm text-white">
                        Preline UI Figma is live.
                      </p>
                      <span className="inline-flex items-center justify-center gap-x-2 rounded-full bg-white/[.075] px-3 py-2 text-sm font-semibold text-white group-hover:bg-white/[.1]">
                        <svg
                          className="h-2.5 w-2.5"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                  {/* <!-- End Announcement Banner --> */}

                  {/* <!-- Title --> */}
                  <div className="mx-auto max-w-3xl text-center">
                    <h1 className="block text-4xl font-medium text-gray-200 sm:text-5xl md:text-6xl lg:text-7xl">
                      Now it's easier than ever to build products
                    </h1>
                  </div>
                  {/* <!-- End Title --> */}

                  <div className="mx-auto max-w-3xl text-center">
                    <p className="text-lg text-gray-400">
                      Preline is a large open-source project, crafted with
                      Tailwind CSS framework by Hmlstream.
                    </p>
                  </div>

                  {/* <!-- Buttons --> */}
                  <div className="text-center">
                    <a
                      className="inline-flex items-center justify-center gap-x-3 rounded-full border border-transparent bg-gradient-to-tl from-blue-600 to-violet-600 px-6 py-3 text-center text-sm font-medium text-white shadow-lg shadow-transparent hover:shadow-blue-700/50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
                      href="#"
                    >
                      Get started
                      <svg
                        className="h-2.5 w-2.5"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </a>
                  </div>
                  {/* <!-- End Buttons --> */}
                </div>
              </div>
            </div>

            {/* <!-- End Hero --> */}
          </div>
        </section>

        {/* <!-- Icon Blocks --> */}
        <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="mx-auto max-w-2xl">
            {/* <!-- Grid --> */}
            <div className="grid gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">
                  Our vision
                </h2>
                <p className="mt-3 text-gray-800 dark:text-gray-400">
                  For as long as there have been cities, the public square has
                  been a fundamental part of the urban landscape - an open,
                  approachable space to meet and engage with friends and
                  neighbours. Space aims to capture this spirit of bringing
                  people together in an exciting, welcoming environment.
                </p>
              </div>

              <div className="space-y-6 lg:space-y-10">
                {/* <!-- Icon Block --> */}
                <div className="flex">
                  <svg
                    className="mt-2 h-6 w-6 shrink-0 text-gray-800 dark:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                    />
                    <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                  </svg>
                  <div className="ml-5 sm:ml-8">
                    <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200 sm:text-lg">
                      High quality Co-Living spaces
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      Our fully furnished spaces are designed and purpose-built
                      with Co-Living in mind, featuring high-end finishes and
                      amenities that go far beyond traditional apartment
                      buildings.
                    </p>
                  </div>
                </div>
                {/* <!-- End Icon Block --> */}

                {/* <!-- Icon Block --> */}
                <div className="flex">
                  <svg
                    className="mt-2 h-6 w-6 shrink-0 text-gray-800 dark:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                  </svg>
                  <div className="ml-5 sm:ml-8">
                    <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200 sm:text-lg">
                      Fostering vibrant communities
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      Our passion is bringing people together. Beyond creating
                      beautiful spaces, we provide shared experiences.
                    </p>
                  </div>
                </div>
                {/* <!-- End Icon Block --> */}

                {/* <!-- Icon Block --> */}
                <div className="flex">
                  <svg
                    className="mt-2 h-6 w-6 shrink-0 text-gray-800 dark:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                  </svg>
                  <div className="ml-5 sm:ml-8">
                    <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200 sm:text-lg">
                      Simple and all-inclusive
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      We worry about the details so that our residents don't
                      have to. From our online application process to simple,
                      all-inclusive billing we aim to make the living experience
                      as effortless as possible.
                    </p>
                  </div>
                </div>
                {/* <!-- End Icon Block --> */}
              </div>
            </div>
            {/* <!-- End Grid --> */}
          </div>
        </div>
        {/* <!-- End Icon Blocks --> */}

        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <img
                  alt="Party"
                  src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div className="lg:py-24">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Grow your audience
                </h2>

                <p className="mt-4 text-gray-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                  qui hic atque tenetur quis eius quos ea neque sunt,
                  accusantium soluta minus veniam tempora deserunt? Molestiae
                  eius quidem quam repellat.
                </p>

                <a
                  href="#"
                  className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100">
          <div className="mx-auto max-w-[1340px] px-4 py-16 sm:px-6 sm:py-24 lg:me-0 lg:pe-0 lg:ps-8">
            <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-16">
              <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Don't just take our word for it...
                  <br className="hidden sm:block lg:hidden" />
                  Read reviews from our customers
                </h2>

                <p className="mt-4 text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptas veritatis illo placeat harum porro optio fugit a
                  culpa sunt id!
                </p>

                <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                  <button className="prev-button rounded-full border border-pink-600 p-3 text-pink-600 hover:bg-pink-600 hover:text-white">
                    <span className="sr-only">Previous Slide</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 rtl:rotate-180"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>

                  <button className="next-button rounded-full border border-pink-600 p-3 text-pink-600 hover:bg-pink-600 hover:text-white">
                    <span className="sr-only">Next Slide</span>
                    <svg
                      className="h-5 w-5 rtl:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 5l7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="-mx-6 lg:col-span-2 lg:mx-0">
                <Swiper
                  {...swiperProps}
                  className="!overflow-hidden"
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  // spaceBetween={50}
                  // slidesPerView={3}
                  navigation={true}
                  pagination={{ clickable: true }}
                  // scrollbar={{ draggable: true }}
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide>
                      <blockquote className="flex h-full flex-col justify-between bg-white p-12">
                        <div>
                          <div className="flex gap-0.5 text-green-500">
                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>

                          <div className="mt-4">
                            <p className="text-2xl font-bold text-pink-600 sm:text-3xl">
                              Stayin' Alive
                            </p>

                            <p className="mt-4 leading-relaxed text-gray-500">
                              No, Rose, they are not breathing. And they have no
                              arms or legs … Where are they? You know what? If
                              we come across somebody with no arms or legs, do
                              we bother resuscitating them? I mean, what quality
                              of life do we have there?
                            </p>
                          </div>
                        </div>

                        <footer className="mt-8 text-sm text-gray-500">
                          &mdash; Michael Scott
                        </footer>
                      </blockquote>
                    </SwiperSlide>

                    <SwiperSlide>
                      <blockquote className="flex h-full flex-col justify-between bg-white p-12">
                        <div>
                          <div className="flex gap-0.5 text-green-500">
                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>

                          <div className="mt-4">
                            <p className="text-2xl font-bold text-pink-600 sm:text-3xl">
                              Stayin' Alive
                            </p>

                            <p className="mt-4 leading-relaxed text-gray-500">
                              No, Rose, they are not breathing. And they have no
                              arms or legs … Where are they? You know what? If
                              we come across somebody with no arms or legs, do
                              we bother resuscitating them? I mean, what quality
                              of life do we have there?
                            </p>
                          </div>
                        </div>

                        <footer className="mt-8 text-sm text-gray-500">
                          &mdash; Michael Scott
                        </footer>
                      </blockquote>
                    </SwiperSlide>

                    <SwiperSlide>
                      <blockquote className="flex h-full flex-col justify-between bg-white p-12">
                        <div>
                          <div className="flex gap-0.5 text-green-500">
                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>

                          <div className="mt-4">
                            <p className="text-2xl font-bold text-pink-600 sm:text-3xl">
                              Stayin' Alive
                            </p>

                            <p className="mt-4 leading-relaxed text-gray-500">
                              No, Rose, they are not breathing. And they have no
                              arms or legs … Where are they? You know what? If
                              we come across somebody with no arms or legs, do
                              we bother resuscitating them? I mean, what quality
                              of life do we have there?
                            </p>
                          </div>
                        </div>

                        <footer className="mt-8 text-sm text-gray-500">
                          &mdash; Michael Scott
                        </footer>
                      </blockquote>
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>

            <div className="mt-8 flex justify-center gap-4 lg:hidden">
              <button
                aria-label="Previous slide"
                className="prev-button rounded-full border border-pink-600 p-4 text-pink-600 hover:bg-pink-600 hover:text-white"
              >
                <svg
                  className="h-5 w-5 -rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                className="next-button rounded-full border border-pink-600 p-4 text-pink-600 hover:bg-pink-600 hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>

        <Team />

        <Features
        // features={[
        //   {
        //     ...t('product:features.Feature1', { returnObjects: true }),
        //     icon: <FontAwesomeIcon icon={faFingerprint} />,
        //   },
        //   {
        //     ...t('product:features.Feature2', { returnObjects: true }),
        //     icon: <FontAwesomeIcon icon={faLock} />,
        //   },
        //   {
        //     ...t('product:features.Feature3', { returnObjects: true }),
        //     icon: <FontAwesomeIcon icon={faPalette} />,
        //   },
        //   {
        //     ...t('product:features.Feature4', { returnObjects: true }),
        //     icon: <FontAwesomeIcon icon={faPenNib} />,
        //   },
        // ]}
        />
        {/* </section> */}
        {/* <section className={styles.section}> */}
        {/* <AboutUs
            title={t('company:about.title')}
            description={t('company:about.description')}
            values={[
              {
                ...t('company:values.Value1', { returnObjects: true }),
                icon: <FontAwesomeIcon icon={faHandshakeSimple} />,
              },
              {
                ...t('company:values.Value2', { returnObjects: true }),
                icon: <FontAwesomeIcon icon={faHeart} />,
              },
              {
                ...t('company:values.Value3', { returnObjects: true }),
                icon: <FontAwesomeIcon icon={faHandsHoldingChild} />,
              },
            ]}
          /> */}

        <HowDoesItWork
          title={t("onboarding:title")}
          description={t("onboarding:description")}
          steps={[
            {
              ...t("onboarding:steps.Step1", { returnObjects: true }),
              icon: <ScanFace />,
            },
            {
              ...t("onboarding:steps.Step2", { returnObjects: true }),
              icon: <Bot />,
            },
            {
              ...t("onboarding:steps.Step3", { returnObjects: true }),
              icon: <Truck />,
            },
          ]}
        />
        {/* </section> */}
        {/* <Pricing /> */}
        {/* <Reviews /> */}
        <FAQ
          icon={<HelpCircle />}
          title={t("faq:title")}
          description={t("faq:description")}
          links={t("faq:links", { returnObjects: true })}
          answers={t("faq:answers", { returnObjects: true })}
        />
        {/* <section className={styles.section}>
          <Subscribe />
        </section> */}
        <Footer
        // description={t('footer:description')}
        // sections={t('footer:sections', { returnObjects: true })}
        />
      </main>
    </>
  )
}

export default Landing
