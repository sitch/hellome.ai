import { EditionCreateNestedOneWithoutPdfInputObjectSchema } from './EditionCreateNestedOneWithoutPdfInput.schema'
import { PDFCreatetagsInputObjectSchema } from './PDFCreatetagsInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PDFCreateWithoutFileInput> = z
  .object({
    id: z.string().optional(),
    height: z.number(),
    width: z.number(),
    pages: z.number(),
    tags: z
      .union([z.lazy(() => PDFCreatetagsInputObjectSchema), z.string().array()])
      .optional(),
    createdAt: z.date().optional(),
    edition: z
      .lazy(() => EditionCreateNestedOneWithoutPdfInputObjectSchema)
      .optional(),
  })
  .strict()

export const PDFCreateWithoutFileInputObjectSchema = Schema
