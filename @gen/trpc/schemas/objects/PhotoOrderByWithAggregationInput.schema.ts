import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { PhotoCountOrderByAggregateInputObjectSchema } from './PhotoCountOrderByAggregateInput.schema'
import { PhotoAvgOrderByAggregateInputObjectSchema } from './PhotoAvgOrderByAggregateInput.schema'
import { PhotoMaxOrderByAggregateInputObjectSchema } from './PhotoMaxOrderByAggregateInput.schema'
import { PhotoMinOrderByAggregateInputObjectSchema } from './PhotoMinOrderByAggregateInput.schema'
import { PhotoSumOrderByAggregateInputObjectSchema } from './PhotoSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PhotoOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    height: z.lazy(() => SortOrderSchema).optional(),
    width: z.lazy(() => SortOrderSchema).optional(),
    tags: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    fileId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => PhotoCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => PhotoAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => PhotoMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => PhotoMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => PhotoSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const PhotoOrderByWithAggregationInputObjectSchema = Schema
