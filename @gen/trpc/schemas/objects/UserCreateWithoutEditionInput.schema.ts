import { z } from 'zod'
import { ConceptCreateNestedOneWithoutUserInputObjectSchema } from './ConceptCreateNestedOneWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateWithoutEditionInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    email: z.string(),
    updatedAt: z.date().optional(),
    createdAt: z.date().optional(),
    Concept: z
      .lazy(() => ConceptCreateNestedOneWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict()

export const UserCreateWithoutEditionInputObjectSchema = Schema
