import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageAvgOrderByAggregateInput> = z
  .object({
    pageNumber: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const PageAvgOrderByAggregateInputObjectSchema = Schema
