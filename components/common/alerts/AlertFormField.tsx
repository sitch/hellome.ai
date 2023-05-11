import { type ReactNode } from "react"
import { useTranslation } from "next-i18next"

import { type FieldError } from "react-hook-form"
import { AlertCircle } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

type Props = {
  title?: ReactNode
  children?: ReactNode
  message?: string | undefined | null
  error?: FieldError
}

export function AlertFormField({ title, message, error, children }: Props) {
  const { t } = useTranslation()

  if (!error?.message && !message) {
    return null
  }

  //   return (        <span role="alert" className="mt-2 block text-red-800">
  //   {error.message}
  // </span>)

  return (
    <Alert variant="destructive" className="mt-4">
      <AlertCircle className="h-4 w-4" />
      {/* <AlertTitle>{title ?? t("alert.destructive.title")}</AlertTitle> */}
      <AlertTitle>{message ?? error?.message}</AlertTitle>
    </Alert>
  )
}
