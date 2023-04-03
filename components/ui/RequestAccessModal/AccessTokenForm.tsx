// import { Button } from 'flowbite-react/lib/esm/components/Button'
// import { Label } from 'flowbite-react/lib/esm/components/Label'
// import { TextInput } from 'flowbite-react/lib/esm/components/TextInput'

import styles from '@/components/forms/forms.module.css'
import React, { useState, MouseEvent } from 'react'
import AnimatedButton from '@/components/common/AnimatedButton/AnimatedButton'

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

export type AccessTokenFormProps = {
  onSubmit: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function AccessTokenForm({ onSubmit }: AccessTokenFormProps) {
  return (
    <form className="mb-4" action="/" method="post" autoComplete="on">
      {/* Access Token */}
      <div className="border">
        <div className="mb-2 block">
          <label
            className={styles.formLabel}
            htmlFor="access-code"
            // value="Access Token"
          >
            Access Token
          </label>
        </div>
        <input
          // className={styles.formInput}
          // theme={theme}
          id="access-code"
          type="password"
          // placeholder="XX-XXXX-XX"
          // placeholder=""
          autoComplete="new-password"
          required={true}
        />
      </div>
      <div className="inline w-full">
        <button
          color="light"
          // className={styles.formSubmit}
          type="submit"
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  )
}
