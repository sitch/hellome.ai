import Link from 'next/link'
import { ReactNode } from 'react'
import { ZapIcon } from './icons'
import { useTranslation } from 'next-i18next'
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
      <div
        // className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50"
        className="mb-4 flex h-12 w-12 items-center justify-center "
      >
        {icon}
      </div>
    </div>
    <div>
      <h2 className="mb-3 text-xl font-bold leading-5">{title}</h2>
      <p className="mb-3 text-sm text-gray-900">{description}</p>
      <Link
        href="/"
        aria-label={title}
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

export const Features = () =>
  // { features }: FeaturesProps
  {
    const { t } = useTranslation('product')

    const features = [
      {
        ...t('features.Feature1', { returnObjects: true }),
        icon: (
          <FontAwesomeIcon
            // size="lg"
            icon={faFingerprint}
          />
        ),
      },
      {
        ...t('features.Feature2', { returnObjects: true }),
        icon: (
          <FontAwesomeIcon
            // size="lg"
            icon={faLock}
          />
        ),
      },
      {
        ...t('features.Feature3', { returnObjects: true }),
        icon: (
          <FontAwesomeIcon
            // size="lg"
            icon={faPalette}
          />
        ),
      },
      {
        ...t('features.Feature4', { returnObjects: true }),
        icon: (
          <FontAwesomeIcon
            // size="lg"
            icon={faPenNib}
          />
        ),
      },
    ]
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
