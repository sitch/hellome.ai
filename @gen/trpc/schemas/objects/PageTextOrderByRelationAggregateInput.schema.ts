import { SortOrderSchema } from '../enums/SortOrder.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PageTextOrderByRelationAggregateInput> = z
  .object({
    _count: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const PageTextOrderByRelationAggregateInputObjectSchema = Schema
