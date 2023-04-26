import { SortOrderSchema } from '../enums/SortOrder.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.TranslatorCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const TranslatorCountOrderByAggregateInputObjectSchema = Schema
