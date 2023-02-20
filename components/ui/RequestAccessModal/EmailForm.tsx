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
import EmailSuccess from './EmailSuccess'
import { ErrorMessage } from '@hookform/error-message'
import EmailInput from '@/components/forms/EmailInput'
import PasswordInput from '@/components/forms/PasswordInput'
import emailStyles from '@/components/forms/EmailInput.module.css'
import classNames from 'classnames'
import { isEmpty } from 'lodash'

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
// type EmailFormTarget = React.FormEvent<HTMLFormElement>['target'] & {
//   email: { value: string }
// }

export interface EmailFormData {
  // name: string
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
    getValues,
    formState,
    // formState:  { isValid, errors } ,
  } = useForm<EmailFormData>({ mode: 'all' })

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
  const [submission, setSubmission] = useState<EmailFormData>()

  const onLoad = () => setIsReady(true)
  const onVerify = (_resp: string) => setIsVerified(true)

  useEffect(() => {
    if (isReady && isValid && !isRendered) {
      captcha.current?.renderExplicitly().then(() => setIsRendered(true))
    }
  }, [isReady, isValid, isRendered])

  const onSubmit: SubmitHandler<EmailFormData> = async (data) => {
    console.log(data)
    setSubmission(data)
    await createRequestAccessByEmail(data)
  }

  // console.log('request-access-form', {
  //   isDirty,
  //   isLoading,
  //   isSubmitted,
  //   isSubmitSuccessful,
  //   isSubmitting,
  //   isValidating,
  //   isValid,
  //   submitCount,
  //   defaultValues,
  //   dirtyFields,
  //   touchedFields,
  //   errors,
  // })

  if (isSubmitSuccessful) {
    return <EmailSuccess data={submission!} />
  }

  return (
    <form
      className={styles.formRoot}
      action="#"
      method="post"
      autoComplete="on"
      onSubmit={handleSubmit(onSubmit)}
      data-cy="RequestAccess:EmailForm:form"
    >
      {/* <EmailInput /> */}

      {/* <Label className={styles.formLabel} htmlFor="email" value="Email" /> */}

      <div className="">
        {/* <input type="text" id="email" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " /> */}
        {/* <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label> */}
        {/* </div> */}

        <div
          className={classNames({
            [styles.formInput]: true,
            [emailStyles['email-input']]: true,
            [emailStyles['valid']]:
              !errors.email && !isEmpty(getValues('email')),
          })}
        >
          <input
            className={classNames({
              // [styles.formInput]: true,
              // "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer": true
            })}
            // className="animate-bg rounded-lg bg-gradient-to-tr from-blue-400 via-green-500 to-red-500"

            placeholder="name@company.com"
            {...register('email', {
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Entered value does not match email format',
              },
              maxLength: 256,
              required: true,
            })}
            type="email"
            autoComplete="email"
            data-cy="RequestAccess:EmailForm:input:email"
          />
          <svg viewBox="0 0 18 18">
            <path d="M11.5,10.5 C6.4987941,17.5909626 1,3.73719105 11.5,6 C10.4594155,14.5485365 17,13.418278 17,9 C17,4.581722 13.418278,1 9,1 C4.581722,1 1,4.581722 1,9 C1,13.418278 4.581722,17 9,17 C13.418278,17 17,13.42 17,9"></path>
            <polyline points="5 9.25 8 12 13 6"></polyline>
          </svg>
        </div>

        {/* <label
          htmlFor="email"
          className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
        >
          Email
        </label> */}
      </div>

      {/* <PasswordInput /> */}

      {/* <Label className={styles.formLabel} htmlFor="email" value="Email" />
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
          data-cy="RequestAccess:EmailForm:input:email"
        />


      </div> */}

      <ErrorMessage
        name="email"
        errors={errors}
        // render={({ message }) => <p>{message}</p>}

        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p
              key={type}
              role="alert"
              data-cy="RequestAccess:EmailForm:validations:email"
            >
              {message}
            </p>
          ))
        }
      />

      {/* {errors.email && (
        <span role="alert" data-cy="RequestAccess:EmailForm:validations:email">
          {errors.email.message}
        </span>
      )} */}

      {/* Captcha */}
      <div className={styles.formCaptcha}>
        <Reaptcha
          id="recaptcha"
          // theme="dark"
          ref={captcha}
          sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_V2_SITE_KEY!}
          onLoad={onLoad}
          onVerify={onVerify}
          explicit={true}
          data-cy="RequestAccess:EmailForm:captcha"
        />
      </div>

      {/* Submit */}
      <div className="mt-6 transition-transform">
        <AnimatedButton
          disabled={[
            !isReady,
            !isVerified,
            // isLoading,
            isValidating,
            !isValid,
            isSubmitting,
            isSubmitSuccessful,
            submitCount >= MAX_SUBMIT_COUNT,
          ].some(Boolean)}
          loading={isSubmitting}
          wide={true}
          type="submit"
          // color="light"
          // className={styles.formSubmit}
          // className="w-full"

          data-cy="RequestAccess:EmailForm:submit:button"
        >
          Submit
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
