import { z } from 'zod'
import { ConceptTypeSchema } from '../enums/ConceptType.schema'
import { PhotoUncheckedCreateNestedManyWithoutConceptsInputObjectSchema } from './PhotoUncheckedCreateNestedManyWithoutConceptsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ConceptUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    type: z.lazy(() => ConceptTypeSchema),
    description: z.string().optional().nullable(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    photos: z
      .lazy(
        () => PhotoUncheckedCreateNestedManyWithoutConceptsInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const ConceptUncheckedCreateWithoutUserInputObjectSchema = Schema