import { z } from 'zod'
import { EditionCreateNestedManyWithoutUserInputObjectSchema } from './EditionCreateNestedManyWithoutUserInput.schema'
import { ConceptCreateNestedOneWithoutUserInputObjectSchema } from './ConceptCreateNestedOneWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    email: z.string(),
    updatedAt: z.date().optional(),
    createdAt: z.date().optional(),
    Edition: z
      .lazy(() => EditionCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    Concept: z
      .lazy(() => ConceptCreateNestedOneWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict()

export const UserCreateInputObjectSchema = Schema
