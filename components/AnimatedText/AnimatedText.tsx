import cn from 'clsx'
import styles from './AnimatedText.module.css'

export type AnimatedTextTheme = 'space'

interface AnimatedTextProps {
  theme: AnimatedTextTheme
  children: string
  className?: string
  hide?: boolean
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  theme,
  children,
  className,
  hide,
}) => {
  const rootClassName = cn(
    styles.root,
    styles[theme],
    {
      transform: true,
      'translate-y-0 opacity-100': !hide,
      'translate-y-full opacity-0': hide,
    },
    className
  )
  return (
    <span className={rootClassName}>
      {/* <span className="block md:inline">{title}</span>
      <span className="block mb-6 md:inline md:mb-0 md:ml-2">
        {description}
      </span>
      {action && action} */}

      {children}
    </span>
  )
}

export default AnimatedText
