import { zodResolver } from "@hookform/resolvers/zod"
import { Trans, useTranslation } from "next-i18next"
import { UseFormProps, useForm } from "react-hook-form"
import z from "zod"
import { makeZodI18nMap } from "zod-i18n-map"

export function useZodForm<TSchema extends z.ZodType>(
  props: Omit<UseFormProps<TSchema["_input"]>, "resolver"> & {
    schema: TSchema
  }
) {
  const form = useForm<TSchema["_input"]>({
    ...props,
    resolver: zodResolver(props.schema, undefined),
  })

  return form
}
