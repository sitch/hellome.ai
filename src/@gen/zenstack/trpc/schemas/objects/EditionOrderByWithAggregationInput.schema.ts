/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { EditionCountOrderByAggregateInputObjectSchema } from "./EditionCountOrderByAggregateInput.schema"
import { EditionMaxOrderByAggregateInputObjectSchema } from "./EditionMaxOrderByAggregateInput.schema"
import { EditionMinOrderByAggregateInputObjectSchema } from "./EditionMinOrderByAggregateInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.EditionOrderByWithAggregationInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    userId: z.lazy(() => SortOrderSchema).optional(),
    pdfId: z.lazy(() => SortOrderSchema).optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    deletedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => EditionCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => EditionMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => EditionMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const EditionOrderByWithAggregationInputObjectSchema = Schema
