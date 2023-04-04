import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Hero } from '@/components/landing/Hero'
import { FAQ } from '@/components/landing/FAQ'
import { Features } from '@/components/landing/Features'
import { Footer } from '@/components/landing/Footer'
import { HowDoesItWork } from '@/components/landing/HowDoesItWork'
// import { Reviews } from '@/components/landing/Reviews'
// import { Subscribe } from '@/components/landing/Subscribe'
import styles from '@/styles/Home.module.css'
import { Pricing } from '@/components/landing/Pricing'
import { AboutUs } from '@/components/landing/AboutUs'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFingerprint,
  faHandshakeSimple,
  faHandsHoldingChild,
  faHeart,
  faLock,
  faPalette,
  faPenNib,
  faPersonBooth,
  faPersonCircleQuestion,
  faRobot,
  faTruckFast,
  // faPen,
  // faUsersViewfinder,
} from '@fortawesome/free-solid-svg-icons'
import i18NextConfig from '@/next-i18next.config'

import { I18nNamespaces } from '@/i18next.d'
import { NextSeo } from 'next-seo'
const ns: (keyof I18nNamespaces)[] = [
  'common',
  'company',
  'faq',
  'footer',
  'landing',
  'onboarding',
  'pricing',
  'product',
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
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { t } = useTranslation(ns)

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
        <section className={styles.section}>
          <Hero
          // title={t('landing:headline.title')}
          // subtitle={t('landing:headline.subtitle')}
          />
        </section>
        <section className={styles.section}>
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
            title={t('onboarding:title')}
            description={t('onboarding:description')}
            steps={[
              {
                ...t('onboarding:steps.Step1', { returnObjects: true }),
                icon: <FontAwesomeIcon icon={faPersonBooth} />,
              },
              {
                ...t('onboarding:steps.Step2', { returnObjects: true }),
                icon: <FontAwesomeIcon icon={faRobot} />,
              },
              {
                ...t('onboarding:steps.Step3', { returnObjects: true }),
                icon: <FontAwesomeIcon icon={faTruckFast} />,
              },
            ]}
          />
        </section>
        {/* <Pricing /> */}
        {/* <Reviews /> */}
        <FAQ
          icon={<FontAwesomeIcon icon={faPersonCircleQuestion} />}
          title={t('faq:title')}
          description={t('faq:description')}
          links={t('faq:links', { returnObjects: true })}
          answers={t('faq:answers', { returnObjects: true })}
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
