import { z } from 'zod'
import { ConceptTypeSchema } from '../enums/ConceptType.schema'
import { NestedEnumConceptTypeFilterObjectSchema } from './NestedEnumConceptTypeFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EnumConceptTypeFilter> = z
  .object({
    equals: z.lazy(() => ConceptTypeSchema).optional(),
    in: z
      .lazy(() => ConceptTypeSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => ConceptTypeSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => ConceptTypeSchema),
        z.lazy(() => NestedEnumConceptTypeFilterObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const EnumConceptTypeFilterObjectSchema = Schema
