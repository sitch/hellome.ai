import { ReactNode } from 'react'
import { setCookie } from 'nookies'
import { useRouter } from 'next/router'
import { ChangeEventHandler, useCallback, useState } from 'react'
import { Locale } from 'nextjs-routes'

type Props = {
  children: ReactNode
}
export const FormLayout = ({ children }: Props) => {
  const router = useRouter()

  const changeLocale = useCallback<ChangeEventHandler<HTMLSelectElement>>(
    (e) => {
      const locale = e.currentTarget.value as unknown as Locale
      setCookie(null, 'NEXT_LOCALE', locale)
      router.replace('/', '/', { locale }).then(() => {
        router.reload()
      })
    },
    [router]
  )

  return <>{children}</>
}
