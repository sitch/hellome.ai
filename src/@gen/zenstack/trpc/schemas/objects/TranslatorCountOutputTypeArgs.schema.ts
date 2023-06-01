/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { TranslatorCountOutputTypeSelectObjectSchema } from "./TranslatorCountOutputTypeSelect.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.TranslatorCountOutputTypeArgs,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    select: z
      .lazy(() => TranslatorCountOutputTypeSelectObjectSchema)
      .optional(),
  })
  .strict()

export const TranslatorCountOutputTypeArgsObjectSchema = Schema
