import { z } from 'zod'
import { PhotoArgsObjectSchema } from './PhotoArgs.schema'
import { PDFArgsObjectSchema } from './PDFArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CloudFileInclude> = z
  .object({
    Photo: z
      .union([z.boolean(), z.lazy(() => PhotoArgsObjectSchema)])
      .optional(),
    PDF: z.union([z.boolean(), z.lazy(() => PDFArgsObjectSchema)]).optional(),
  })
  .strict()

export const CloudFileIncludeObjectSchema = Schema
