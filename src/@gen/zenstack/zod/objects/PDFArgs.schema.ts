/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PDFIncludeObjectSchema } from "./PDFInclude.schema"
import { PDFSelectObjectSchema } from "./PDFSelect.schema"

const Schema: z.ZodType<
  Omit<Prisma.PDFArgs, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    select: z.lazy(() => PDFSelectObjectSchema).optional(),
    include: z.lazy(() => PDFIncludeObjectSchema).optional(),
  })
  .strict()

export const PDFArgsObjectSchema = Schema
