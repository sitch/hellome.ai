/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-comment-textnodes */

// import { Modal } from 'flowbite-react'

import React, { useState, type MouseEvent, type ReactNode } from "react"
import Link from "next/link"

import AccessTokenForm from "@/components/ui/RequestAccessModal/AccessTokenForm"
import EmailForm from "@/components/ui/RequestAccessModal/EmailForm"
import styles from "@/components/ui/RequestAccessModal/RequestAccessModal.module.css"

const privacyPolicy = (
  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
    We’ll never share your details. Read our{" "}
    <Link
      href={{
        pathname: "/pages/policies/[slug]",
        query: { slug: "privacy-policy" },
      }}
      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
    >
      Privacy Policy
    </Link>
    .
  </p>
)

export type RequestAccessModalProps = {
  className?: string
  children: ReactNode
}

export default function RequestAccessModal({
  className,
  children,
}: RequestAccessModalProps) {
  const [show, setShow] = useState<boolean>(false)

  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    e.nativeEvent.stopImmediatePropagation()
    setShow(!show)
  }
  const onClose = () => setShow(false)

  // const onSubmit = (e: MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault()
  //   e.nativeEvent.stopImmediatePropagation()
  //   console.log('submit')
  // }

  return (
    <>
      {/* Toggle Modal */}
      <a className={className} onClick={onClick} data-cy="invite-modal:button">
        {children!}
      </a>
    </>

    //       {/* Modal */}
    //       <Modal
    //         show={show}
    //         size="md"
    //         popup={true}
    //         onClose={onClose}

    //         // See: https://github.com/shorwood/tailwindcss-unsplash
    //         // style={{
    //         //   backgroundImage: "url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809')",
    //         // }}

    //         // className={styles.modalContainer}
    //       >
    //         <Modal.Header
    //         // className={styles.modalContainer}
    //         // className="prose rounded-t px-4 py-2"
    //         // className="prose"
    //         >
    //           {/* <div className="px-6 py-4 border-b rounded-t dark:border-gray-600">
    //                 <h3 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
    //                     Connect wallet
    //                 </h3>
    //             </div> */}

    //           <div className="prose p-2">Join the Waitlist</div>
    //           {/* Request Access */}

    //           {/* <div className="rounded-t border-b px-4 py-2 dark:border-gray-600">
    //             <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-xl font-black text-transparent">
    //               Request Access
    //             </span>
    //           </div> */}
    //         </Modal.Header>

    //         <Modal.Body className={styles.modalBody}>
    //           <div
    //           // className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8"
    //           >
    //             {/* <h3 className="text-xl font-medium text-gray-900 dark:text-white">
    //           Request Access
    //         </h3> */}

    //             {/* <h3 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-xl font-black">
    //               Request Access
    //             </h3> */}

    //             {/* <p className="mt-2 text-sm text-gray-500 dark:text-gray-400"> */}
    //             {/* <p className="mt-2 text-sm"></p>
    //               We're so excited to get to know you!
    //             </p> */}

    //             <EmailForm />

    //             {/* <div className="my-3 flex items-center px-3">
    //               <hr className="w-full border-slate-600" />
    //               <span className="mx-3 text-slate-500">or</span>
    //               <hr className="w-full border-slate-600" />
    //             </div> */}

    //             {/* <AccessTokenForm onSubmit={onSubmit} />

    //       <div className="my-3 flex items-center px-3">
    //         <hr className="w-full border-slate-600" />
    //         <span className="mx-3 text-slate-500">or</span>
    //         <hr className="w-full border-slate-600" />
    //       </div>

    // <p className="text-black">
    //               You can <a href="/earn">earn</a>
    //             </p> */}

    //             {privacyPolicy}
    //           </div>
    //         </Modal.Body>
    //       </Modal>
  )
}

// *****************************************************************************
// return (
//   <>
//       <Modal.Header />
//       <Modal.Body>
//         <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
//           <h3 className="text-xl font-medium text-gray-900 dark:text-white">
//             Sign in to our platform
//           </h3>
//           <div>
//             <div className="mb-2 block">
//               <Label htmlFor="email" value="Your email" />
//             </div>
//             <TextInput
//               id="email"
//               placeholder="name@company.com"
//               required={true}
//             />
//           </div>
//           <div>
//             <div className="mb-2 block">
//               <Label htmlFor="password" value="Your password" />
//             </div>
//             <TextInput id="password" type="password" required={true} />
//           </div>
//           <div className="flex justify-between">
//             <div className="flex items-center gap-2">
//               <Checkbox id="remember" />
//               <Label htmlFor="remember">Remember me</Label>
//             </div>
//             <a
//               href="/modal"
//               className="text-sm text-blue-700 hover:underline dark:text-blue-500"
//             >
//               Lost Password?
//             </a>
//           </div>
//           <div className="w-full">
//             <Button>Log in to your account</Button>
//           </div>
//           <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
//             Not registered?{' '}
//             <a
//               href="/modal"
//               className="text-blue-700 hover:underline dark:text-blue-500"
//             >
//               Create account
//             </a>
//           </div>
//         </div>
//       </Modal.Body>
//   </>
// )
