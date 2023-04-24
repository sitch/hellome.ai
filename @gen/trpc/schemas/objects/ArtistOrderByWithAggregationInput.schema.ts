import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { ArtistCountOrderByAggregateInputObjectSchema } from './ArtistCountOrderByAggregateInput.schema'
import { ArtistMaxOrderByAggregateInputObjectSchema } from './ArtistMaxOrderByAggregateInput.schema'
import { ArtistMinOrderByAggregateInputObjectSchema } from './ArtistMinOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ArtistOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ArtistCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => ArtistMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ArtistMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const ArtistOrderByWithAggregationInputObjectSchema = Schema
