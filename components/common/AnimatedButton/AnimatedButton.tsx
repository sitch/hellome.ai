import { ReactNode } from 'react'
import { Button, ButtonProps, Spinner } from 'flowbite-react'
import styles from './AnimatedButton.module.css'
import classNames from 'classnames'

function LoadingIcon() {
  return <Spinner color="info" aria-label="Info spinner example" />

  // return ( <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
  // <span className="visually-hidden">
  //   {/* Loading... */}
  //   </span>
  // </div>)

  // return (  <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-300" role="status">
  // <span className="visually-hidden">
  //   {/* Loading... */}
  // </span>
  // </div>)

  // return (<svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>)
}

export interface AnimatedButtonProps extends ButtonProps {
  wide?: boolean
  loading?: boolean
  children: ReactNode
}

export default function AnimatedButton({
  wide = false,
  loading = false,
  children,
  ...props
}: AnimatedButtonProps) {
  const rootClassName = classNames({
    [styles.button]: true,
    'w-full': wide,
  })

  return (
    <Button className={rootClassName} outline={true} {...props}>
      <div className="rounded-t border-b px-4 py-2 dark:border-gray-600">
        {loading && <LoadingIcon />}
        <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-xl font-black text-transparent">
          {children}
        </span>
      </div>
    </Button>
  )
}
