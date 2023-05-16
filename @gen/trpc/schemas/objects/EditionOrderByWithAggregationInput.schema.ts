import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { EditionCountOrderByAggregateInputObjectSchema } from "./EditionCountOrderByAggregateInput.schema"
import { EditionMaxOrderByAggregateInputObjectSchema } from "./EditionMaxOrderByAggregateInput.schema"
import { EditionMinOrderByAggregateInputObjectSchema } from "./EditionMinOrderByAggregateInput.schema"

const Schema: z.ZodType<Prisma.EditionOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    pdfId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => EditionCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => EditionMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => EditionMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const EditionOrderByWithAggregationInputObjectSchema = Schema
