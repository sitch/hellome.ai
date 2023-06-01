/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { PageArtworkCountOrderByAggregateInputObjectSchema } from "./PageArtworkCountOrderByAggregateInput.schema"
import { PageArtworkMaxOrderByAggregateInputObjectSchema } from "./PageArtworkMaxOrderByAggregateInput.schema"
import { PageArtworkMinOrderByAggregateInputObjectSchema } from "./PageArtworkMinOrderByAggregateInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageArtworkOrderByWithAggregationInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    status: z.lazy(() => SortOrderSchema).optional(),
    pageId: z.lazy(() => SortOrderSchema).optional(),
    storyId: z.lazy(() => SortOrderSchema).optional(),
    artistId: z.lazy(() => SortOrderSchema).optional(),
    photoId: z.lazy(() => SortOrderSchema).optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    deletedAt: z.lazy(() => SortOrderSchema).optional(),
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
