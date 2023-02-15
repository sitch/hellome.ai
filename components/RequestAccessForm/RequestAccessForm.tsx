import {
  Button,
  Checkbox,
  Label,
  Modal,
  TextInput,
  TextInputProps,
} from 'flowbite-react'
import styles from './RequestAccessForm.module.css'
import React, { useState, MouseEvent } from 'react'
import AnimatedButton from '@/components/AnimatedButton/AnimatedButton'

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

export interface RequestAccessFormProps {
  onSubmit: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function RequestAccessForm({
  onSubmit,
}: RequestAccessFormProps) {
  return (
    <form className="mb-4" action="/" method="post" autoComplete="on">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          {/* First name */}
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

          {/* Last name */}
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
      </div>

      {/* Email */}
      <div>
        <div className="mb-2 block">
          <Label className={styles.formLabel} htmlFor="email" value="Email" />
        </div>
        <TextInput
          // className={styles.formInput}
          theme={theme}
          id="email"
          type="email"
          placeholder="name@company.com"
          autoComplete="email"
          required={true}
        />
      </div>

      <div className="w-full">
        <AnimatedButton
          className={styles.formSubmit}
          type="submit"
          onClick={onSubmit}
        >
          Submit
        </AnimatedButton>
      </div>
    </form>
  )
}
