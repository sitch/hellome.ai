import { z } from 'zod'
import { UserCreateNestedOneWithoutEditionInputObjectSchema } from './UserCreateNestedOneWithoutEditionInput.schema'
import { PDFCreateNestedOneWithoutEditionInputObjectSchema } from './PDFCreateNestedOneWithoutEditionInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EditionCreateInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutEditionInputObjectSchema),
    pdf: z.lazy(() => PDFCreateNestedOneWithoutEditionInputObjectSchema),
  })
  .strict()

export const EditionCreateInputObjectSchema = Schema
