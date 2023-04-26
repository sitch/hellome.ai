import { SortOrderSchema } from '../enums/SortOrder.schema'
import { TranslatorCountOrderByAggregateInputObjectSchema } from './TranslatorCountOrderByAggregateInput.schema'
import { TranslatorMaxOrderByAggregateInputObjectSchema } from './TranslatorMaxOrderByAggregateInput.schema'
import { TranslatorMinOrderByAggregateInputObjectSchema } from './TranslatorMinOrderByAggregateInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.TranslatorOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => TranslatorCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => TranslatorMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => TranslatorMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const TranslatorOrderByWithAggregationInputObjectSchema = Schema
