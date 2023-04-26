import { ConceptTypeSchema } from '../enums/ConceptType.schema'
import { PhotoCreateNestedManyWithoutConceptsInputObjectSchema } from './PhotoCreateNestedManyWithoutConceptsInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.ConceptCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    type: z.lazy(() => ConceptTypeSchema),
    description: z.string().optional().nullable(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    photos: z
      .lazy(() => PhotoCreateNestedManyWithoutConceptsInputObjectSchema)
      .optional(),
  })
  .strict()

export const ConceptCreateInputObjectSchema = Schema
