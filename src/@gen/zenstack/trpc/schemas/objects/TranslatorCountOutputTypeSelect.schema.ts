/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<
  Omit<
    Prisma.TranslatorCountOutputTypeSelect,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    pageTexts: z.boolean().optional(),
  })
  .strict()

export const TranslatorCountOutputTypeSelectObjectSchema = Schema
