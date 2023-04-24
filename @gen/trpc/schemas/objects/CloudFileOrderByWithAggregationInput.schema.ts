import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { CloudFileCountOrderByAggregateInputObjectSchema } from './CloudFileCountOrderByAggregateInput.schema'
import { CloudFileAvgOrderByAggregateInputObjectSchema } from './CloudFileAvgOrderByAggregateInput.schema'
import { CloudFileMaxOrderByAggregateInputObjectSchema } from './CloudFileMaxOrderByAggregateInput.schema'
import { CloudFileMinOrderByAggregateInputObjectSchema } from './CloudFileMinOrderByAggregateInput.schema'
import { CloudFileSumOrderByAggregateInputObjectSchema } from './CloudFileSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CloudFileOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    resourceType: z.lazy(() => SortOrderSchema).optional(),
    filename: z.lazy(() => SortOrderSchema).optional(),
    size: z.lazy(() => SortOrderSchema).optional(),
    ext: z.lazy(() => SortOrderSchema).optional(),
    mime: z.lazy(() => SortOrderSchema).optional(),
    metadata: z.lazy(() => SortOrderSchema).optional(),
    path: z.lazy(() => SortOrderSchema).optional(),
    signature: z.lazy(() => SortOrderSchema).optional(),
    privacy: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => CloudFileCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => CloudFileAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => CloudFileMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => CloudFileMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => CloudFileSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const CloudFileOrderByWithAggregationInputObjectSchema = Schema
