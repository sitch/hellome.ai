import { PDFArgsObjectSchema } from './PDFArgs.schema'
import { PhotoArgsObjectSchema } from './PhotoArgs.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.CloudFileInclude> = z
  .object({
    photo: z
      .union([z.boolean(), z.lazy(() => PhotoArgsObjectSchema)])
      .optional(),
    pdf: z.union([z.boolean(), z.lazy(() => PDFArgsObjectSchema)]).optional(),
  })
  .strict()

export const CloudFileIncludeObjectSchema = Schema
