/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextSchema } from "../PageText.schema"
import { TranslatorCountOutputTypeArgsObjectSchema } from "./TranslatorCountOutputTypeArgs.schema"

const Schema: z.ZodType<
  Omit<Prisma.TranslatorInclude, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    pageTexts: z
      .union([z.boolean(), z.lazy(() => PageTextSchema.findMany)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => TranslatorCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const TranslatorIncludeObjectSchema = Schema
