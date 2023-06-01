/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { LocaleSchema } from "../enums/Locale.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.EnumLocaleFieldUpdateOperationsInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    set: z.lazy(() => LocaleSchema).optional(),
  })
  .strict()

export const EnumLocaleFieldUpdateOperationsInputObjectSchema = Schema
