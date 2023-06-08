/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { TranslatorWhereInputObjectSchema } from "./TranslatorWhereInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.TranslatorRelationFilter,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    is: z
      .lazy(() => TranslatorWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => TranslatorWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const TranslatorRelationFilterObjectSchema = Schema
