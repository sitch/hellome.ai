import { ReactNode } from "react"
import { useTranslation } from "next-i18next"

import { AlertCircle } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

type Props = {
  title?: ReactNode
  children?: ReactNode
  message?: string
}

export function AlertDestructive({ title, message, children }: Props) {
  const { t } = useTranslation()
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{title ?? t("alert.destructive.title")}</AlertTitle>
      <AlertDescription>
        {message}
        {children}
      </AlertDescription>
    </Alert>
  )
}
