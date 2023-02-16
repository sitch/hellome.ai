import { ReactNode } from 'react'
import { Button, ButtonProps } from 'flowbite-react'
import styles from './AnimatedButton.module.css'
import classNames from 'classnames'

export interface AnimatedButtonProps extends ButtonProps {
  wide?: boolean
  children: ReactNode
}

export default function AnimatedButton({
  wide = false,
  children,
  ...props
}: AnimatedButtonProps) {
  const rootClassName = classNames({
    [styles.button]: true,
    'w-full': wide,
  })

  return (
    <Button className={rootClassName} outline={true} {...props}>
      {children}
    </Button>
  )
}
