/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PDFWhereInputObjectSchema } from "./PDFWhereInput.schema"

const Schema: z.ZodType<
  Omit<Prisma.PDFRelationFilter, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    is: z
      .lazy(() => PDFWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => PDFWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const PDFRelationFilterObjectSchema = Schema
