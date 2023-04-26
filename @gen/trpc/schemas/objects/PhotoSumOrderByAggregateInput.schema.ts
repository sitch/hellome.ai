import { SortOrderSchema } from '../enums/SortOrder.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PhotoSumOrderByAggregateInput> = z
  .object({
    height: z.lazy(() => SortOrderSchema).optional(),
    width: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const PhotoSumOrderByAggregateInputObjectSchema = Schema
