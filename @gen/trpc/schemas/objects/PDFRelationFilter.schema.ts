import { PDFWhereInputObjectSchema } from './PDFWhereInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PDFRelationFilter> = z
  .object({
    is: z.lazy(() => PDFWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => PDFWhereInputObjectSchema).optional(),
  })
  .strict()

export const PDFRelationFilterObjectSchema = Schema
