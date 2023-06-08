/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { AuthorCountOrderByAggregateInputObjectSchema } from "./AuthorCountOrderByAggregateInput.schema"
import { AuthorMaxOrderByAggregateInputObjectSchema } from "./AuthorMaxOrderByAggregateInput.schema"
import { AuthorMinOrderByAggregateInputObjectSchema } from "./AuthorMinOrderByAggregateInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.AuthorOrderByWithAggregationInput,
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
      .lazy(() => AuthorCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => AuthorMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => AuthorMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const AuthorOrderByWithAggregationInputObjectSchema = Schema
