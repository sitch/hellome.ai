import BrandLogo from '@/components/ui/BrandLogo/BrandLogo'
import { AnimatedBook } from '@/components/ui/library/AnimatedBook/AnimatedBook'
import { ReactNode } from 'react'
import { DotTextureIcon } from './icons'

export function MottoTags() {
  return (
    <div>
      <p className="mb-4 inline-block rounded-full bg-teal-accent-400 px-3 py-px text-xs font-semibold uppercase tracking-wider text-teal-900">
        Trust
      </p>{' '}
      <p className="mb-4 inline-block rounded-full bg-teal-accent-400 px-3 py-px text-xs font-semibold uppercase tracking-wider text-teal-900">
        Love ❤️
      </p>{' '}
      <p className="mb-4 inline-block rounded-full bg-teal-accent-400 px-3 py-px text-xs font-semibold uppercase tracking-wider text-teal-900">
        {/* Connectedness */}
        Excellence
      </p>
    </div>
  )
}

export type HeroProps = {
  title: string
  subtitle: string | ReactNode
}

export const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center justify-center px-4 pt-16 sm:max-w-xl md:max-w-2xl md:px-8 lg:pt-32">
      <BrandLogo size="small" />
      <br />
      <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
        {/* <MottoTags /> */}

        <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <DotTextureIcon />
            <span className="relative">{title.split(' ')[0]}</span>
          </span>{' '}
          {title.split(' ').slice(1).join(' ')}
        </h2>

        <p className="text-base text-gray-700 md:text-lg">{subtitle}</p>
      </div>

      {/* <p className="mb-10 max-w-md text-xs text-gray-600 sm:text-sm md:text-center">
        {content.action.description}
      </p> */}
      {/* <Image
        // src="https://kitwind.io/assets/kometa/half-phone.png"
        src="/static/images/sitchenko-infant-drawing-bw.png"
        className="mx-auto w-full border-4 border-black md:w-auto md:max-w-xs"
        alt=""
        height={240}
        width={240}
      /> */}

      <AnimatedBook />
    </div>
  )
}
