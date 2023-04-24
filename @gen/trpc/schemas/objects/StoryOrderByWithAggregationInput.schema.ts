import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { StoryCountOrderByAggregateInputObjectSchema } from './StoryCountOrderByAggregateInput.schema'
import { StoryMaxOrderByAggregateInputObjectSchema } from './StoryMaxOrderByAggregateInput.schema'
import { StoryMinOrderByAggregateInputObjectSchema } from './StoryMinOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.StoryOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    artistId: z.lazy(() => SortOrderSchema).optional(),
    authorId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => StoryCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => StoryMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => StoryMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const StoryOrderByWithAggregationInputObjectSchema = Schema
