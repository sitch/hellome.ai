import { z } from 'zod'
import { ConceptUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './ConceptUncheckedCreateNestedOneWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutEditionInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    email: z.string(),
    updatedAt: z.date().optional(),
    createdAt: z.date().optional(),
    Concept: z
      .lazy(() => ConceptUncheckedCreateNestedOneWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict()

export const UserUncheckedCreateWithoutEditionInputObjectSchema = Schema
