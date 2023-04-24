import { z } from 'zod'
import { UserCreateNestedOneWithoutEditionInputObjectSchema } from './UserCreateNestedOneWithoutEditionInput.schema'
import { PDFCreateNestedOneWithoutBookInputObjectSchema } from './PDFCreateNestedOneWithoutBookInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EditionCreateInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutEditionInputObjectSchema),
    pdf: z.lazy(() => PDFCreateNestedOneWithoutBookInputObjectSchema),
  })
  .strict()

export const EditionCreateInputObjectSchema = Schema
