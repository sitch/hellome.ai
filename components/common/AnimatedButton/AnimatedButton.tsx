import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'
// import { Button, ButtonProps, Spinner } from 'flowbite-react'
import styles from './AnimatedButton.module.css'
import classNames from 'classnames'
import Loader from '@/components/loader'

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
  caret?: 'left' | 'right' | undefined
  children: ReactNode
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export default function AnimatedButton({
  wide = false,
  loading = false,
  caret = undefined,
  children,
  ...props
}: AnimatedButtonProps) {
  // return (
  //   <button
  //     className={classNames({
  //       [styles.button]: true,
  //       [styles.buttonWide]: wide,
  //     })}
  //     // outline={true}
  //     {...props}
  //   >
  //     <div className={styles.container}>
  //       {/* {loading && <LoadingIcon />} */}
  //       <span
  //         className={classNames({
  //           [styles.inner]: true,
  //           // [styles.innerAnimation]: !(props.disabled ?? false),
  //           [styles.innerAnimation]: true,
  //         })}
  //       >
  //         {children}
  //       </span>
  //     </div>
  //   </button>
  // )

  return (
    <>
      <button
        {...props}
        className={`${
          wide ? 'w-full' : ''
        } shadow-indigo group relative mb-1 mr-1 inline-flex animate-button items-center  justify-center rounded-lg bg-gradient-to-r  from-emerald-400 via-indigo-400 to-rose-400 p-0.5 text-sm font-medium text-gray-900 shadow-lg transition-all duration-75 ease-in hover:shadow-blue-700/50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800`}
      >
        <span
          className={`${
            wide ? 'w-full' : ''
          } relative rounded-md bg-white px-6 py-3 font-semibold transition-all duration-75  ease-in group-hover:bg-white/5 group-hover:text-white dark:bg-gray-900`}
        >
          {loading ? (
            <Loader />
          ) : (
            <>
              {' '}
              {caret == 'left' && (
                <svg
                  className="mr-2 inline h-2.5 w-2.5 rotate-180"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
              {children}
              {caret == 'right' && (
                <svg
                  className="mr-2 inline h-2.5 w-2.5 "
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </>
          )}
        </span>
      </button>
    </>
  )
}
