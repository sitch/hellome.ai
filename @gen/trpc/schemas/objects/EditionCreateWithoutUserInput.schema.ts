import { z } from 'zod'
import { PDFCreateNestedOneWithoutEditionInputObjectSchema } from './PDFCreateNestedOneWithoutEditionInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EditionCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    pdf: z.lazy(() => PDFCreateNestedOneWithoutEditionInputObjectSchema),
  })
  .strict()

export const EditionCreateWithoutUserInputObjectSchema = Schema
