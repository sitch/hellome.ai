import { z } from 'zod'
import { PDFCreatetagsInputObjectSchema } from './PDFCreatetagsInput.schema'
import { EditionUncheckedCreateNestedOneWithoutPdfInputObjectSchema } from './EditionUncheckedCreateNestedOneWithoutPdfInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PDFUncheckedCreateWithoutFileInput> = z
  .object({
    id: z.string().optional(),
    height: z.number(),
    width: z.number(),
    pages: z.number(),
    tags: z
      .union([z.lazy(() => PDFCreatetagsInputObjectSchema), z.string().array()])
      .optional(),
    createdAt: z.date().optional(),
    book: z
      .lazy(() => EditionUncheckedCreateNestedOneWithoutPdfInputObjectSchema)
      .optional(),
  })
  .strict()

export const PDFUncheckedCreateWithoutFileInputObjectSchema = Schema
