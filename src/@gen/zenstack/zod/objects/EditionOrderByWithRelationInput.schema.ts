/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { PDFOrderByWithRelationInputObjectSchema } from "./PDFOrderByWithRelationInput.schema"
import { UserOrderByWithRelationInputObjectSchema } from "./UserOrderByWithRelationInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.EditionOrderByWithRelationInput,
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
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    pdf: z.lazy(() => PDFOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict()

export const EditionOrderByWithRelationInputObjectSchema = Schema
