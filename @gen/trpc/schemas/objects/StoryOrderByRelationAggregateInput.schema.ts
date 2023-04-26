import { SortOrderSchema } from '../enums/SortOrder.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.StoryOrderByRelationAggregateInput> = z
  .object({
    _count: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const StoryOrderByRelationAggregateInputObjectSchema = Schema
