import cn from 'clsx'
import s from './AnimatedText.module.css'

interface AnimatedTextProps {
  className?: string
  children: string
  theme: 'space'
  hide?: boolean
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  className,
  children,
  theme,
  hide,
}) => {
  const rootClassName = cn(
    s.root,
    s[theme],
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
