import { SortOrderSchema } from '../enums/SortOrder.schema'
import { AuthorCountOrderByAggregateInputObjectSchema } from './AuthorCountOrderByAggregateInput.schema'
import { AuthorMaxOrderByAggregateInputObjectSchema } from './AuthorMaxOrderByAggregateInput.schema'
import { AuthorMinOrderByAggregateInputObjectSchema } from './AuthorMinOrderByAggregateInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.AuthorOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => AuthorCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => AuthorMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => AuthorMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const AuthorOrderByWithAggregationInputObjectSchema = Schema
