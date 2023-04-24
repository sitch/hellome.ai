import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PredictionMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    uuid: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    started_at: z.lazy(() => SortOrderSchema).optional(),
    completed_at: z.lazy(() => SortOrderSchema).optional(),
    version: z.lazy(() => SortOrderSchema).optional(),
    error: z.lazy(() => SortOrderSchema).optional(),
    logs: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const PredictionMaxOrderByAggregateInputObjectSchema = Schema
