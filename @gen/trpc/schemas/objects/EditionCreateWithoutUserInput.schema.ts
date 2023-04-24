import { z } from 'zod'
import { PDFCreateNestedOneWithoutBookInputObjectSchema } from './PDFCreateNestedOneWithoutBookInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EditionCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    pdf: z.lazy(() => PDFCreateNestedOneWithoutBookInputObjectSchema),
  })
  .strict()

export const EditionCreateWithoutUserInputObjectSchema = Schema
