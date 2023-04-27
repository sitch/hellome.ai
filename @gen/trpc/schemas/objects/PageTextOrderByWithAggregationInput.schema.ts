import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { PageTextCountOrderByAggregateInputObjectSchema } from "./PageTextCountOrderByAggregateInput.schema"
import { PageTextMaxOrderByAggregateInputObjectSchema } from "./PageTextMaxOrderByAggregateInput.schema"
import { PageTextMinOrderByAggregateInputObjectSchema } from "./PageTextMinOrderByAggregateInput.schema"

const Schema: z.ZodType<Prisma.PageTextOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    locale: z.lazy(() => SortOrderSchema).optional(),
    text: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    pageId: z.lazy(() => SortOrderSchema).optional(),
    storyId: z.lazy(() => SortOrderSchema).optional(),
    authorId: z.lazy(() => SortOrderSchema).optional(),
    translatorId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => PageTextCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => PageTextMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => PageTextMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const PageTextOrderByWithAggregationInputObjectSchema = Schema
