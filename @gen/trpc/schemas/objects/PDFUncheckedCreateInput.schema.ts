import { EditionUncheckedCreateNestedOneWithoutPdfInputObjectSchema } from './EditionUncheckedCreateNestedOneWithoutPdfInput.schema'
import { PDFCreatetagsInputObjectSchema } from './PDFCreatetagsInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PDFUncheckedCreateInput> = z
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
    edition: z
      .lazy(() => EditionUncheckedCreateNestedOneWithoutPdfInputObjectSchema)
      .optional(),
  })
  .strict()

export const PDFUncheckedCreateInputObjectSchema = Schema
