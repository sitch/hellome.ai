/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageSumOrderByAggregateInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    pageNumber: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const PageSumOrderByAggregateInputObjectSchema = Schema
