/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { TranslatorCountOrderByAggregateInputObjectSchema } from "./TranslatorCountOrderByAggregateInput.schema"
import { TranslatorMaxOrderByAggregateInputObjectSchema } from "./TranslatorMaxOrderByAggregateInput.schema"
import { TranslatorMinOrderByAggregateInputObjectSchema } from "./TranslatorMinOrderByAggregateInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.TranslatorOrderByWithAggregationInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    deletedAt: z.lazy(() => SortOrderSchema).optional(),
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
