import { z } from 'zod'
import { PDFWhereInputObjectSchema } from './PDFWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PDFRelationFilter> = z
  .object({
    is: z.lazy(() => PDFWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => PDFWhereInputObjectSchema).optional(),
  })
  .strict()

export const PDFRelationFilterObjectSchema = Schema
