import { SortOrderSchema } from '../enums/SortOrder.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PageAvgOrderByAggregateInput> = z
  .object({
    pageNumber: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const PageAvgOrderByAggregateInputObjectSchema = Schema
