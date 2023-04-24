import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { PageCountOrderByAggregateInputObjectSchema } from './PageCountOrderByAggregateInput.schema'
import { PageAvgOrderByAggregateInputObjectSchema } from './PageAvgOrderByAggregateInput.schema'
import { PageMaxOrderByAggregateInputObjectSchema } from './PageMaxOrderByAggregateInput.schema'
import { PageMinOrderByAggregateInputObjectSchema } from './PageMinOrderByAggregateInput.schema'
import { PageSumOrderByAggregateInputObjectSchema } from './PageSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    pageNumber: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    storyId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => PageCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => PageAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => PageMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => PageMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => PageSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const PageOrderByWithAggregationInputObjectSchema = Schema
