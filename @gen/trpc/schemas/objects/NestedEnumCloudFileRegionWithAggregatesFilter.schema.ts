import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { CloudFileRegionSchema } from "../enums/CloudFileRegion.schema"
import { NestedEnumCloudFileRegionFilterObjectSchema } from "./NestedEnumCloudFileRegionFilter.schema"
import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema"

const Schema: z.ZodType<Prisma.NestedEnumCloudFileRegionWithAggregatesFilter> =
  z
    .object({
      equals: z.lazy(() => CloudFileRegionSchema).optional(),
      in: z
        .lazy(() => CloudFileRegionSchema)
        .array()
        .optional(),
      notIn: z
        .lazy(() => CloudFileRegionSchema)
        .array()
        .optional(),
      not: z
        .union([
          z.lazy(() => CloudFileRegionSchema),
          z.lazy(
            () => NestedEnumCloudFileRegionWithAggregatesFilterObjectSchema,
          ),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
      _min: z
        .lazy(() => NestedEnumCloudFileRegionFilterObjectSchema)
        .optional(),
      _max: z
        .lazy(() => NestedEnumCloudFileRegionFilterObjectSchema)
        .optional(),
    })
    .strict()

export const NestedEnumCloudFileRegionWithAggregatesFilterObjectSchema = Schema
