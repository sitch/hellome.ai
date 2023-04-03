import Link from 'next/link'
import { ReactNode } from 'react'
import { useTranslation } from 'next-i18next'
import { DotTextureIcon, FeatureCheckIcon } from './icons'

export type PricingHeaderProps = {
  title: string
  description: string
}

function PricingHeader({ title, description }: PricingHeaderProps) {
  return (
    <>
      <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
        <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <DotTextureIcon />
            <span className="relative">{title.split(' ')[0]}</span>
          </span>{' '}
          {title.split(' ').slice(1).join(' ')}
        </h2>
        <p className="text-base text-gray-700 md:text-lg">{description}</p>
      </div>
    </>
  )
}

export type PriceCardFeature = {
  label: string
  icon?: ReactNode
}

export type PriceCardProps = {
  title: string
  cost: string
  period?: string | null | undefined
  features: PriceCardFeature[]
  action: {
    label: string
    disabled: boolean
  }
}
function PriceCard({ title, cost, features, action, period }: PriceCardProps) {
  return (
    <div>
      <div className="rounded bg-gray-900 p-8">
        <div className="mb-4 text-center">
          <p className="pb-2 text-xl font-medium tracking-wide text-gray-300">
            {title}
          </p>

          <div className="flex items-center justify-center">
            <p className="mr-2 text-5xl font-semibold text-white lg:text-6xl">
              {cost}
            </p>

            {period ? (
              <p className="text-lg text-gray-500">{`/ ${period}`}</p>
            ) : null}
          </div>
        </div>
        <ul className="mb-8 space-y-2">
          {features.map(({ label, icon = <FeatureCheckIcon /> }, index) => (
            <li key={index} className="flex items-center">
              <div className="mr-3">{icon}</div>
              <p className="font-medium text-gray-300">{label}</p>
            </li>
          ))}
        </ul>
        <button
          type="submit"
          disabled={action.disabled}
          className={
            action.disabled
              ? 'inline-flex h-12 w-full cursor-not-allowed items-center justify-center rounded bg-teal-accent-400 px-6 font-semibold tracking-wide text-teal-900 shadow-md focus:outline-none'
              : // : 'inline-flex h-12 w-full items-center justify-center rounded bg-teal-accent-400 px-6 font-semibold tracking-wide text-teal-900 shadow-md transition duration-200 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none'
                'inline-flex h-12 w-full items-center justify-center rounded bg-deep-purple-accent-400 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
          }
        >
          {action.label}
        </button>
      </div>
      <div className="mx-auto h-2 w-11/12 rounded-b bg-gray-900 opacity-75" />
      <div className="mx-auto h-2 w-10/12 rounded-b bg-gray-900 opacity-50" />
      <div className="mx-auto h-2 w-9/12 rounded-b bg-gray-900 opacity-25" />
    </div>
  )
}

function PricingAssistance() {
  const { t } = useTranslation('pricing')
  return (
    <div className="items-center justify-center text-center">
      {t('assistance.label')}
      <br />
      <Link
        href={{
          pathname: '/policies/[slug]',
          query: { slug: 'pricing-assistance-policy' },
        }}
      >
        {t('assistance.qualify')}
      </Link>
    </div>
  )
}

export function Pricing() {
  const { t } = useTranslation('pricing')
  return (
    <div className="relative h-full w-full">
      <div className="absolute hidden h-96 w-full bg-gray-50 lg:block" />
      <div className="relative mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
        <PricingHeader
          title={t('header.title')}
          description={t('header.description')}
        />

        <div className="grid max-w-screen-lg gap-10 sm:mx-auto lg:grid-cols-3">
          <PriceCard
            title={t('plans.books.unit.one.title')}
            cost={t('plans.books.unit.one.cost')}
            period={t('plans.books.unit.one.period')}
            features={t('plans.books.unit.one.features', {
              returnObjects: true,
            })}
            action={t('plans.books.unit.one.action', {
              returnObjects: true,
            })}
          />
          <PriceCard
            title={t('plans.books.subscriptions.developmental.monthly.title')}
            cost={t('plans.books.subscriptions.developmental.monthly.cost')}
            period={t('plans.books.subscriptions.developmental.monthly.period')}
            features={t(
              'plans.books.subscriptions.developmental.monthly.features',
              { returnObjects: true }
            )}
            action={t(
              'plans.books.subscriptions.developmental.monthly.action',
              {
                returnObjects: true,
              }
            )}
          />
          <PriceCard
            title={t('plans.books.subscriptions.developmental.yearly.title')}
            cost={t('plans.books.subscriptions.developmental.yearly.cost')}
            period={t('plans.books.subscriptions.developmental.yearly.period')}
            features={t(
              'plans.books.subscriptions.developmental.yearly.features',
              { returnObjects: true }
            )}
            action={t('plans.books.subscriptions.developmental.yearly.action', {
              returnObjects: true,
            })}
          />
          <br />
          <PricingAssistance />
        </div>
      </div>
    </div>
  )
}
