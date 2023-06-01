/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PDFCountOrderByAggregateInput,
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
  })
  .strict()

export const PDFCountOrderByAggregateInputObjectSchema = Schema
