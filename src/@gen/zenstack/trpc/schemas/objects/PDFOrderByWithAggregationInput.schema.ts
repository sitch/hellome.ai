/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { PDFAvgOrderByAggregateInputObjectSchema } from "./PDFAvgOrderByAggregateInput.schema"
import { PDFCountOrderByAggregateInputObjectSchema } from "./PDFCountOrderByAggregateInput.schema"
import { PDFMaxOrderByAggregateInputObjectSchema } from "./PDFMaxOrderByAggregateInput.schema"
import { PDFMinOrderByAggregateInputObjectSchema } from "./PDFMinOrderByAggregateInput.schema"
import { PDFSumOrderByAggregateInputObjectSchema } from "./PDFSumOrderByAggregateInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PDFOrderByWithAggregationInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    height: z.lazy(() => SortOrderSchema).optional(),
    width: z.lazy(() => SortOrderSchema).optional(),
    pages: z.lazy(() => SortOrderSchema).optional(),
    tags: z.lazy(() => SortOrderSchema).optional(),
    fileId: z.lazy(() => SortOrderSchema).optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    deletedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => PDFCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => PDFAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => PDFMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => PDFMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => PDFSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const PDFOrderByWithAggregationInputObjectSchema = Schema
