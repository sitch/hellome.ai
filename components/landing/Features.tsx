import Link from 'next/link'
import { ReactNode } from 'react'
import { ZapIcon } from './icons'

export type FeatureProps = {
  icon?: ReactNode
  title: string
  description: string
  action?: {
    label: string
  }
}

export const Feature = ({
  title,
  description,
  action = { label: 'Learn More' },
  icon = <ZapIcon />,
}: FeatureProps) => (
  <div className="flex max-w-md flex-col sm:mx-auto sm:flex-row">
    <div className="mr-4">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50">
        {icon}
      </div>
    </div>
    <div>
      <h6 className="mb-3 text-xl font-bold leading-5">{title}</h6>
      <p className="mb-3 text-sm text-gray-900">{description}</p>
      <Link
        href="/"
        aria-label=""
        className="inline-flex items-center font-semibold text-deep-purple-accent-400 transition-colors duration-200 hover:text-deep-purple-800"
      >
        {action.label}
      </Link>
    </div>
  </div>
)

export type FeaturesProps = {
  features: FeatureProps[]
}

export const Features = ({ features }: FeaturesProps) => {
  return (
    <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <div className="row-gap-10 mx-auto grid max-w-screen-lg gap-8 lg:grid-cols-2">
        {features.map((props, index) => (
          <Feature key={index} {...props} />
        ))}
      </div>
    </div>
  )
}
