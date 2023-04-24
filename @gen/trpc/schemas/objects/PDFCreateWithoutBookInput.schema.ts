import { z } from 'zod'
import { PDFCreatetagsInputObjectSchema } from './PDFCreatetagsInput.schema'
import { CloudFileCreateNestedOneWithoutPDFInputObjectSchema } from './CloudFileCreateNestedOneWithoutPDFInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PDFCreateWithoutBookInput> = z
  .object({
    id: z.string().optional(),
    height: z.number(),
    width: z.number(),
    pages: z.number(),
    tags: z
      .union([z.lazy(() => PDFCreatetagsInputObjectSchema), z.string().array()])
      .optional(),
    createdAt: z.date().optional(),
    file: z.lazy(() => CloudFileCreateNestedOneWithoutPDFInputObjectSchema),
  })
  .strict()

export const PDFCreateWithoutBookInputObjectSchema = Schema
