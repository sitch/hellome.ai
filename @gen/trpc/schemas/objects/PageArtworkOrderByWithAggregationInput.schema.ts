import { SortOrderSchema } from '../enums/SortOrder.schema'
import { PageArtworkCountOrderByAggregateInputObjectSchema } from './PageArtworkCountOrderByAggregateInput.schema'
import { PageArtworkMaxOrderByAggregateInputObjectSchema } from './PageArtworkMaxOrderByAggregateInput.schema'
import { PageArtworkMinOrderByAggregateInputObjectSchema } from './PageArtworkMinOrderByAggregateInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PageArtworkOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    pageId: z.lazy(() => SortOrderSchema).optional(),
    storyId: z.lazy(() => SortOrderSchema).optional(),
    artistId: z.lazy(() => SortOrderSchema).optional(),
    photoId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => PageArtworkCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => PageArtworkMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => PageArtworkMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const PageArtworkOrderByWithAggregationInputObjectSchema = Schema
