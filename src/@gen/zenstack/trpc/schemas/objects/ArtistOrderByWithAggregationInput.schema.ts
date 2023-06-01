/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { ArtistCountOrderByAggregateInputObjectSchema } from "./ArtistCountOrderByAggregateInput.schema"
import { ArtistMaxOrderByAggregateInputObjectSchema } from "./ArtistMaxOrderByAggregateInput.schema"
import { ArtistMinOrderByAggregateInputObjectSchema } from "./ArtistMinOrderByAggregateInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.ArtistOrderByWithAggregationInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    userId: z.lazy(() => SortOrderSchema).optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    deletedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ArtistCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => ArtistMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ArtistMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const ArtistOrderByWithAggregationInputObjectSchema = Schema
