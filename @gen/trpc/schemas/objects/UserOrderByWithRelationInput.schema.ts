import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { EditionOrderByRelationAggregateInputObjectSchema } from './EditionOrderByRelationAggregateInput.schema'
import { ConceptOrderByWithRelationInputObjectSchema } from './ConceptOrderByWithRelationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    Edition: z
      .lazy(() => EditionOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Concept: z
      .lazy(() => ConceptOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict()

export const UserOrderByWithRelationInputObjectSchema = Schema
