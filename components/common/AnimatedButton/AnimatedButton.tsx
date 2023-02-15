import { ReactNode } from 'react'
import { Button, ButtonProps } from 'flowbite-react'
import styles from './AnimatedButton.module.css'

export interface AnimatedButtonProps extends ButtonProps {
  children: ReactNode
}

export default function AnimatedButton({
  children,
  ...props
}: AnimatedButtonProps) {
  return (
    <Button className={styles.button} outline={true} {...props}>
      {children}
    </Button>
  )
}
