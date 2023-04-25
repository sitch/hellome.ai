import { z } from 'zod'
import { PDFSelectObjectSchema } from './PDFSelect.schema'
import { PDFIncludeObjectSchema } from './PDFInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PDFArgs> = z
  .object({
    select: z.lazy(() => PDFSelectObjectSchema).optional(),
    include: z.lazy(() => PDFIncludeObjectSchema).optional(),
  })
  .strict()

export const PDFArgsObjectSchema = Schema
