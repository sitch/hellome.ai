import { z } from 'zod'
import { PDFCreatetagsInputObjectSchema } from './PDFCreatetagsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PDFUncheckedCreateWithoutEditionInput> = z
  .object({
    id: z.string().optional(),
    height: z.number(),
    width: z.number(),
    pages: z.number(),
    tags: z
      .union([z.lazy(() => PDFCreatetagsInputObjectSchema), z.string().array()])
      .optional(),
    createdAt: z.date().optional(),
    fileId: z.string(),
  })
  .strict()

export const PDFUncheckedCreateWithoutEditionInputObjectSchema = Schema
