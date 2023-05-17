import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PDFWhereInputObjectSchema } from "./PDFWhereInput.schema"

const Schema: z.ZodType<Prisma.PDFRelationFilter> = z
  .object({
    is: z.lazy(() => PDFWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => PDFWhereInputObjectSchema).optional(),
  })
  .strict()

export const PDFRelationFilterObjectSchema = Schema
