import { PDFIncludeObjectSchema } from './PDFInclude.schema'
import { PDFSelectObjectSchema } from './PDFSelect.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PDFArgs> = z
  .object({
    select: z.lazy(() => PDFSelectObjectSchema).optional(),
    include: z.lazy(() => PDFIncludeObjectSchema).optional(),
  })
  .strict()

export const PDFArgsObjectSchema = Schema
