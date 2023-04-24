import { z } from 'zod'
import { PDFIncludeObjectSchema } from './PDFInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PDFArgs> = z
  .object({
    include: z.lazy(() => PDFIncludeObjectSchema).optional(),
  })
  .strict()

export const PDFArgsObjectSchema = Schema
