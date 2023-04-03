import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'
// import { Button, ButtonProps, Spinner } from 'flowbite-react'
import styles from './AnimatedButton.module.css'
import classNames from 'classnames'

// function LoadingIcon() {
//   return <Spinner color="info" aria-label="Button Loading" />

//   // return ( <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
//   // <span className="visually-hidden">
//   //   {/* Loading... */}
//   //   </span>
//   // </div>)

//   // return (  <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-300" role="status">
//   // <span className="visually-hidden">
//   //   {/* Loading... */}
//   // </span>
//   // </div>)

//   // return (<svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>)
// }

export type AnimatedButtonProps = {
  wide?: boolean
  loading?: boolean
  children: ReactNode
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export default function AnimatedButton({
  wide = false,
  loading = false,
  children,
  ...props
}: AnimatedButtonProps) {
  return (
    <button
      className={classNames({
        [styles.button]: true,
        [styles.buttonWide]: wide,
      })}
      // outline={true}
      {...props}
    >
      <div className={styles.container}>
        {/* {loading && <LoadingIcon />} */}
        <span
          className={classNames({
            [styles.inner]: true,
            // [styles.innerAnimation]: !(props.disabled ?? false),
            [styles.innerAnimation]: true,
          })}
        >
          {children}
        </span>
      </div>
    </button>
  )
}
