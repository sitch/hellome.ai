import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { CloudFileAvgOrderByAggregateInputObjectSchema } from "./CloudFileAvgOrderByAggregateInput.schema"
import { CloudFileCountOrderByAggregateInputObjectSchema } from "./CloudFileCountOrderByAggregateInput.schema"
import { CloudFileMaxOrderByAggregateInputObjectSchema } from "./CloudFileMaxOrderByAggregateInput.schema"
import { CloudFileMinOrderByAggregateInputObjectSchema } from "./CloudFileMinOrderByAggregateInput.schema"
import { CloudFileSumOrderByAggregateInputObjectSchema } from "./CloudFileSumOrderByAggregateInput.schema"

const Schema: z.ZodType<Prisma.CloudFileOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    filename: z.lazy(() => SortOrderSchema).optional(),
    stem: z.lazy(() => SortOrderSchema).optional(),
    extension: z.lazy(() => SortOrderSchema).optional(),
    size: z.lazy(() => SortOrderSchema).optional(),
    mime: z.lazy(() => SortOrderSchema).optional(),
    resourceType: z.lazy(() => SortOrderSchema).optional(),
    metadata: z.lazy(() => SortOrderSchema).optional(),
    key: z.lazy(() => SortOrderSchema).optional(),
    bucket: z.lazy(() => SortOrderSchema).optional(),
    region: z.lazy(() => SortOrderSchema).optional(),
    publicUrl: z.lazy(() => SortOrderSchema).optional(),
    privacy: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => CloudFileCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => CloudFileAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => CloudFileMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => CloudFileMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => CloudFileSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const CloudFileOrderByWithAggregationInputObjectSchema = Schema
