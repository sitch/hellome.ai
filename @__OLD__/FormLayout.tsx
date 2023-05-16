import {
  useCallback,
  useState,
  type ChangeEventHandler,
  type ReactNode,
} from "react"
import { useRouter } from "next/router"

import { type Locale } from "nextjs-routes"
import { setCookie } from "nookies"

type Props = {
  children: ReactNode
}
export const FormLayout = ({ children }: Props) => {
  const router = useRouter()

  const changeLocale = useCallback<ChangeEventHandler<HTMLSelectElement>>(
    (e) => {
      const locale = e.currentTarget.value as unknown as Locale
      setCookie(null, "NEXT_LOCALE", locale)
      router.replace("/", "/", { locale }).then(() => {
        router.reload()
      })
    },
    [router],
  )

  return <>{children}</>
}
