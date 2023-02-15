import {
  Button,
  Checkbox,
  Label,
  Modal,
  TextInput,
  TextInputProps,
} from 'flowbite-react'
import AnimatedButton from '../AnimatedButton/AnimatedButton'
import styles from './InviteModal.module.css'

// See: https://flowbite.com/docs/forms/input-field/

const theme: TextInputProps['theme'] = {
  field: {
    input: {
      // colors: {
      //   'background-color': "white"
      // }
      base: styles.formInput,
    },
  },
}

export interface InviteModalContentProps {
  // name?: string
  // className?: string
  // children: React.ReactNode
}

export default function InviteModalContent(_props: InviteModalContentProps) {
  const onSubmit = () => {
    console.log('submitting')
  }

  // const form = (
  //   <form className="mb-4" action="/" method="post" autoComplete="on">
  //     <div className="flex justify-between">
  //       <div className="flex items-center gap-2">
  //         {/* First name */}
  //         <div>
  //           <div className="mb-2 block">
  //             <Label
  //               className={styles.formLabel}
  //               htmlFor="first-name"
  //               value="First name"
  //             />
  //           </div>
  //           <TextInput
  //             // className={styles.formInput}
  //             theme={theme}
  //             id="first-name"
  //             placeholder="First name"
  //             autoComplete="given-name"
  //             required={true}
  //             autoFocus={true}
  //           />
  //         </div>

  //         {/* Last name */}
  //         <div>
  //           <div className="mb-2 block">
  //             <Label
  //               className={styles.formLabel}
  //               htmlFor="last-name"
  //               value="Last name"
  //             />
  //           </div>
  //           <TextInput
  //             // className={styles.formInput}
  //             theme={theme}
  //             id="last-name"
  //             placeholder="Last name"
  //             autoComplete="family-name"
  //             required={true}
  //           />
  //         </div>
  //       </div>
  //     </div>

  //     {/* Email */}
  //     <div>
  //       <div className="mb-2 block">
  //         <Label className={styles.formLabel} htmlFor="email" value="Email" />
  //       </div>
  //       <TextInput
  //         // className={styles.formInput}
  //             theme={theme}
  //             id="email"
  //         type="email"
  //         placeholder="name@company.com"
  //         autoComplete="email"
  //         required={true}
  //       />
  //     </div>

  //     <div className="w-full">
  //       <AnimatedButton
  //         className={styles.formSubmit}
  //         type="submit"
  //         onClick={onSubmit}
  //       >
  //         Submit
  //       </AnimatedButton>
  //     </div>
  //   </form>
  // )

  const form = (
    <>
      <label
        htmlFor="helper-text"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Your email
      </label>
      <input
        type="email"
        id="helper-text"
        aria-describedby="helper-text-explanation"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="name@flowbite.com"
      />
      <p
        id="helper-text-explanation"
        className="mt-2 text-sm text-gray-500 dark:text-gray-400"
      >
        We’ll never share your details. Read our{' '}
        <a
          href="#"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Privacy Policy
        </a>
        .
      </p>
    </>
  )

  return (
    <>
      <Modal.Header></Modal.Header>

      <Modal.Body>
        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
          {/* <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Request Access
              </h3> */}

          <h3 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-xl font-black">
            Request Access
          </h3>

          <p>We're so excited to get to know you!</p>

          {form}
        </div>
      </Modal.Body>
    </>
  )
}

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
