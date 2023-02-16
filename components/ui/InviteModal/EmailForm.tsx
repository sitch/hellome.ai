import {
  Button,
  Checkbox,
  Label,
  TextInput,
  TextInputProps,
} from 'flowbite-react'
import styles from '@/components/forms/forms.module.css'
import React, { useState, useRef, useEffect } from 'react'
import AnimatedButton from '@/components/common/AnimatedButton/AnimatedButton'
import Reaptcha from 'reaptcha'
import { SubmitHandler, useForm } from 'react-hook-form'

// *****************************************************************************
// ReCaptcha
// See: https://www.google.com/recaptcha/admin/site/612766558
// *****************************************************************************

export const MAX_SUBMIT_COUNT = 10

const emailIcon = (
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
type EmailFormTarget = React.FormEvent<HTMLFormElement>['target'] & {
  email: { value: string }
}
export interface EmailFormData {
  email: string
}

export interface EmailFormProps {
  // onSubmit: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function EmailForm(_props: EmailFormProps) {
  //   export type FormState<TFieldValues extends FieldValues> = {
  //     isDirty: boolean;
  //     isLoading: boolean;
  //     isSubmitted: boolean;
  //     isSubmitSuccessful: boolean;
  //     isSubmitting: boolean;
  //     isValidating: boolean;
  //     isValid: boolean;
  //     submitCount: number;
  //     defaultValues?: undefined | Readonly<DeepPartial<TFieldValues>>;
  //     dirtyFields: Partial<Readonly<FieldNamesMarkedBoolean<TFieldValues>>>;
  //     touchedFields: Partial<Readonly<FieldNamesMarkedBoolean<TFieldValues>>>;
  //     errors: FieldErrors<TFieldValues>;
  // };

  const {
    register,
    handleSubmit,
    watch,
    formState,
    // formState:  { isValid, errors } ,
  } = useForm<EmailFormData>()

  const {
    isDirty,
    isLoading,
    isSubmitted,
    isSubmitSuccessful,
    isSubmitting,
    isValidating,
    isValid,
    submitCount,
    defaultValues,
    dirtyFields,
    touchedFields,
    errors,
  } = formState

  // Form
  // const [validated, setValidated] = useState<boolean>(false)

  // Captcha
  // const captcha = useRef<RenderProps>(null)
  const captcha = useRef<Reaptcha>(null)
  const [isReady, setIsReady] = useState<boolean>(false)
  const [isRendered, setIsRendered] = useState<boolean>(false)
  const [isVerified, setIsVerified] = useState<boolean>(false)

  const onLoad = () => setIsReady(true)
  const onVerify = (_resp: string) => setIsVerified(true)

  useEffect(() => {
    if (isReady && isValid && !isRendered) {
      captcha.current?.renderExplicitly().then(() => setIsRendered(true))
    }
  }, [isReady, isValid, isRendered])
  // const onChange = async (formIsValid: boolean) => {
  //   void maybeRenderCaptcha()
  // }

  // const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
  //   const target = e.target as EmailFormTarget
  //   const data = { email: target.email.value }
  //   await createRequestAccessByEmail(data)
  // }

  const onSubmit: SubmitHandler<EmailFormData> = async (data) => {
    console.log(data)
    await createRequestAccessByEmail(data)
  }

  console.log('form', {
    isDirty,
    isLoading,
    isSubmitted,
    isSubmitSuccessful,
    isSubmitting,
    isValidating,
    isValid,
    submitCount,
    defaultValues,
    dirtyFields,
    touchedFields,
    errors,
  })

  return (
    <form
      className={styles.formRoot}
      action="#"
      method="post"
      autoComplete="on"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Label className={styles.formLabel} htmlFor="email" value="Email" />

      <div className="relative mb-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          {emailIcon}
        </div>

        <input
          className={styles.formInput}
          // className="animate-bg rounded-lg bg-gradient-to-tr from-blue-400 via-green-500 to-red-500"
          // className={`${styles.formInput} animate-bg bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 font-black text-black opacity-5`}
          // theme={theme}
          // name="email"
          // required={true}

          id="email"
          placeholder="name@company.com"
          {...register('email', {
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Entered value does not match email format',
            },
          })}
          autoComplete="email"
          type="email"
        />

        {errors.email && <span role="alert">{errors.email.message}</span>}
      </div>

      {/* Captcha */}
      <Reaptcha
        className={styles.formCaptcha}
        ref={captcha}
        sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_V2_SITE_KEY!}
        onLoad={onLoad}
        onVerify={onVerify}
        explicit={true}
      />

      {/* Submit */}
      <div className="mt-3 transition-transform">
        <AnimatedButton
          disabled={
            ![
              isReady,
              isVerified,
              !isLoading,
              !isValidating,
              isValid,
              !isSubmitting,
              !isSubmitSuccessful,
              submitCount < MAX_SUBMIT_COUNT,
            ].some(Boolean)
          }
          wide={true}
          type="submit"
          // color="light"
          // className={styles.formSubmit}
          // className="w-full"
        >
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
