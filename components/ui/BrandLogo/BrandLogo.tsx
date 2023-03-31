import cn from 'clsx'
import AnimatedText from '@/components/common/AnimatedText/AnimatedText'
// import styles from '@/styles/Home.module.css'
import s from './BrandLogo.module.css'
import classnames from 'classnames'

type BrandLogoProps = {
  size?: string
  // className?: string
  // children: string
  // theme: 'space'
  // hide?: boolean
}

export default function BrandLogo({ size }: BrandLogoProps) {
  // const rootClassName = cn(
  //   s.root,
  //   s[theme],
  //   {
  //     transform: true,
  //     'translate-y-0 opacity-100': !hide,
  //     'translate-y-full opacity-0': hide,
  //   },
  //   className
  // )
  return (
    <div>
      <span
        className={classnames([s.brandNameHelloPart, size])}
        data-cy="brand-logo-hello"
      >
        Hello
      </span>

      <AnimatedText
        className={classnames([s.brandNameMePart, size])}
        theme="space"
      >
        Me
      </AnimatedText>

      <span
        className={classnames([s.brandNameAiPart, size])}
        data-cy="brand-logo-ai"
      >
        .ai
      </span>

      {/* <div>
          <span style={{ fontSize: '64px', fontFamily: 'arial', padding: 24 }}>
            AI with Authenticity
          </span>
        </div> */}
    </div>
  )
}
