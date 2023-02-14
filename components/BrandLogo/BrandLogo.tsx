import cn from 'clsx'
import styles from '@/styles/Home.module.css'
import s from './BrandLogo.module.css'
import AnimatedText from '@/components/AnimatedText/AnimatedText'

interface BrandLogoProps {
  // className?: string
  // children: string
  // theme: 'space'
  // hide?: boolean
}

const BrandLogo: React.FC<BrandLogoProps> = (
  {
    // className,
    // children,
    // theme,
    // hide,
  }
) => {
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
    <>
      <div className={styles.center}>
        <span className={s.brandNameHelloPart}>Hello</span>

        <AnimatedText className={s.brandNameMePart} theme="space">
          Me
        </AnimatedText>

        <span className={s.brandNameAiPart}>.ai</span>
      </div>

      {/* <div>
          <span style={{ fontSize: '64px', fontFamily: 'arial', padding: 24 }}>
            AI with Authenticity
          </span>
        </div> */}
    </>
  )
}

export default BrandLogo
