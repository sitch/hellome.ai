/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { TranslatorIncludeObjectSchema } from "./TranslatorInclude.schema"
import { TranslatorSelectObjectSchema } from "./TranslatorSelect.schema"

const Schema: z.ZodType<
  Omit<Prisma.TranslatorArgs, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    select: z.lazy(() => TranslatorSelectObjectSchema).optional(),
    include: z.lazy(() => TranslatorIncludeObjectSchema).optional(),
  })
  .strict()

export const TranslatorArgsObjectSchema = Schema
