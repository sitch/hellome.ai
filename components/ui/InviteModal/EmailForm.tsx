import {
  Button,
  Checkbox,
  Label,
  Modal,
  TextInput,
  TextInputProps,
} from 'flowbite-react'
import styles from '@/components/forms/forms.module.css'
import React, { useState, MouseEvent, StrictMode } from 'react'
import AnimatedButton from '@/components/common/AnimatedButton/AnimatedButton'
import Reaptcha from 'reaptcha'

// *****************************************************************************
// ReCaptcha
// See: https://www.google.com/recaptcha/admin/site/612766558
// *****************************************************************************

// See: https://flowbite.com/docs/forms/input-field/

// const theme: TextInputProps['theme'] = {
//   field: {
//     input: {
//       // colors: {
//       //   'background-color': "white"
//       // }
//       base: styles.formInput,
//     },
//   },
// }

export interface EmailFormData {
  email: string
}

export interface EmailFormProps {
  // onSubmit: (e: MouseEvent<HTMLButtonElement>) => void
}

export async function createRequestAccessByEmail(data: EmailFormData) {
  const resp = await fetch('/api/mailer/request-access/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  const result = await resp.json()
  console.log('resp', { result })
  return result
}

export default function EmailForm(_props: EmailFormProps) {
  const [verified, setVerified] = useState<boolean>(false)

  const onVerify = (_recaptchaResponse: string) => {
    setVerified(true)
  }

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    const target = e.target as typeof e.target & {
      email: { value: string }
    }
    const data = { email: target.email.value }
    await createRequestAccessByEmail(data)
  }

  const icon = (
    <svg
      aria-hidden="true"
      className="h-5 w-5 text-gray-500 dark:text-gray-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
    </svg>
  )

  return (
    <form
      className={styles.formRoot}
      // action="/api/mailer/request-access/email"
      method="post"
      action="#"
      onSubmit={onSubmit}
      autoComplete="on"
    >
      {/* <Label className={styles.formLabel} htmlFor="email" value="Email" /> */}

      <div className="relative mb-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          {icon}
        </div>

        <input
          className={styles.formInput}
          // className="animate-bg rounded-lg bg-gradient-to-tr from-blue-400 via-green-500 to-red-500"
          // className={`${styles.formInput} animate-bg bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 font-black text-black opacity-5`}
          // theme={theme}
          id="email"
          name="email"
          type="email"
          placeholder="name@company.com"
          autoComplete="email"
          required={true}
        />
      </div>

      {/* <Reaptcha
        className={styles.formCaptcha}
        sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_V2_SITE_KEY!}
        onVerify={onVerify}
      /> */}

      <div className="mt-3 transition-transform">
        <AnimatedButton
          // color="light"
          // className={styles.formSubmit}
          // className="w-full"
          wide={true}
          type="submit"
          // onClick={onSubmit}
          disabled={!verified}
        >
          {/* Submit */}
          <div className="rounded-t border-b px-4 py-2 dark:border-gray-600">
            <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-xl font-black text-transparent">
              Submit
            </span>
          </div>
        </AnimatedButton>
      </div>
    </form>
  )
}

{
  /* First name & Last name*/
}
{
  /* <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div>
            <div className="mb-2 block">
              <Label
                className={styles.formLabel}
                htmlFor="first-name"
                value="First name"
              />
            </div>
            <TextInput
              // className={styles.formInput}
              theme={theme}
              id="first-name"
              placeholder="First name"
              autoComplete="given-name"
              required={true}
              autoFocus={true}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label
                className={styles.formLabel}
                htmlFor="last-name"
                value="Last name"
              />
            </div>
            <TextInput
              // className={styles.formInput}
              theme={theme}
              id="last-name"
              placeholder="Last name"
              autoComplete="family-name"
              required={true}
            />
          </div>
        </div>
      </div> */
}
