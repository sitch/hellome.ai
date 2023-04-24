import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { PageTextOrderByRelationAggregateInputObjectSchema } from './PageTextOrderByRelationAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TranslatorOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    pageTexts: z
      .lazy(() => PageTextOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const TranslatorOrderByWithRelationInputObjectSchema = Schema
