/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { PhotoAvgOrderByAggregateInputObjectSchema } from "./PhotoAvgOrderByAggregateInput.schema"
import { PhotoCountOrderByAggregateInputObjectSchema } from "./PhotoCountOrderByAggregateInput.schema"
import { PhotoMaxOrderByAggregateInputObjectSchema } from "./PhotoMaxOrderByAggregateInput.schema"
import { PhotoMinOrderByAggregateInputObjectSchema } from "./PhotoMinOrderByAggregateInput.schema"
import { PhotoSumOrderByAggregateInputObjectSchema } from "./PhotoSumOrderByAggregateInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PhotoOrderByWithAggregationInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    height: z.lazy(() => SortOrderSchema).optional(),
    width: z.lazy(() => SortOrderSchema).optional(),
    tags: z.lazy(() => SortOrderSchema).optional(),
    fileId: z.lazy(() => SortOrderSchema).optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    deletedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => PhotoCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => PhotoAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => PhotoMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => PhotoMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => PhotoSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const PhotoOrderByWithAggregationInputObjectSchema = Schema
