/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PDFSumOrderByAggregateInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    height: z.lazy(() => SortOrderSchema).optional(),
    width: z.lazy(() => SortOrderSchema).optional(),
    pages: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const PDFSumOrderByAggregateInputObjectSchema = Schema
