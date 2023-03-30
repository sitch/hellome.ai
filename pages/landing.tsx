import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Hero } from '@/components/landing/Hero'
import { FAQ } from '@/components/landing/FAQ'
import { Features } from '@/components/landing/Features'
import { Footer } from '@/components/landing/Footer'
import { HowDoesItWork } from '@/components/landing/HowDoesItWork'
import { Reviews } from '@/components/landing/Reviews'
import { Subscribe } from '@/components/landing/Subscribe'
import styles from '@/styles/Home.module.css'
import { Pricing } from '@/components/landing/Pricing'
import { AboutUs } from '@/components/landing/AboutUs'
import { I18n } from '@/components/landing/I18n'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFingerprint,
  faHandshakeSimple,
  faHandsHoldingChild,
  faHeart,
  faLock,
  faPalette,
  faPen,
  faPenNib,
  faPersonBooth,
  faPersonCircleQuestion,
  faRobot,
  faTruckFast,
  faUsersViewfinder,
} from '@fortawesome/free-solid-svg-icons'

import i18NextConfig from '@/next-i18next.config'

import { I18nNamespaces } from '@/i18next.d'
import { NextSeo } from 'next-seo'
const ns: (keyof I18nNamespaces)[] = ['common', 'footer']
// const ns = ['common', 'footer']

interface Props {
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
            title={I18n.enUS.headline.title}
            subtitle={I18n.enUS.headline.subtitle}
          />
          <Features
            features={[
              {
                ...I18n.enUS.product.features.Feature1,
                icon: <FontAwesomeIcon icon={faFingerprint} />,
              },
              {
                ...I18n.enUS.product.features.Feature2,
                icon: <FontAwesomeIcon icon={faLock} />,
              },
              {
                ...I18n.enUS.product.features.Feature3,
                icon: <FontAwesomeIcon icon={faPalette} />,
              },
              {
                ...I18n.enUS.product.features.Feature4,
                icon: <FontAwesomeIcon icon={faPenNib} />,
              },
            ]}
          />
        </section>
        <section className={styles.section}>
          <AboutUs
            title={I18n.enUS.company.about.title}
            description={I18n.enUS.company.about.description}
            values={[
              {
                title: I18n.enUS.company.values.Value1,
                icon: <FontAwesomeIcon icon={faHandshakeSimple} />,
              },
              {
                title: I18n.enUS.company.values.Value2,
                icon: <FontAwesomeIcon icon={faHeart} />,
              },
              {
                title: I18n.enUS.company.values.Value3,
                icon: <FontAwesomeIcon icon={faHandsHoldingChild} />,
              },
            ]}
          />

          <HowDoesItWork
            title={I18n.enUS.onboarding.title}
            description={I18n.enUS.onboarding.description}
            steps={[
              {
                ...I18n.enUS.onboarding.steps.Step1,
                icon: <FontAwesomeIcon icon={faPersonBooth} />,
              },
              {
                ...I18n.enUS.onboarding.steps.Step2,
                icon: <FontAwesomeIcon icon={faRobot} />,
              },
              {
                ...I18n.enUS.onboarding.steps.Step3,
                icon: <FontAwesomeIcon icon={faTruckFast} />,
              },
            ]}
          />
        </section>
        <Pricing />
        {/* <Reviews /> */}
        <FAQ
          // {...I18n.enUS.FAQ}
          title={I18n.enUS.FAQ.title}
          description={I18n.enUS.FAQ.description}
          links={I18n.enUS.FAQ.links}
          answers={I18n.enUS.FAQ.answers}
          icon={<FontAwesomeIcon icon={faPersonCircleQuestion} />}
        />
        {/* <section className={styles.section}>
          <Subscribe />
        </section> */}
        <Footer
          //  {...I18n.enUS.footer}
          description={t('footer:description')}
          sections={t('footer:sections', { returnObjects: true })}
        />
      </main>
    </>
  )
}

export default Landing
