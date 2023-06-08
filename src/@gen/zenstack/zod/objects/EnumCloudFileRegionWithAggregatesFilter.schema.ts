/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { CloudFileRegionSchema } from "../enums/CloudFileRegion.schema"
import { NestedEnumCloudFileRegionFilterObjectSchema } from "./NestedEnumCloudFileRegionFilter.schema"
import { NestedEnumCloudFileRegionWithAggregatesFilterObjectSchema } from "./NestedEnumCloudFileRegionWithAggregatesFilter.schema"
import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.EnumCloudFileRegionWithAggregatesFilter,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    equals: z.lazy(() => CloudFileRegionSchema).optional(),
    in: z
      .union([
        z.lazy(() => CloudFileRegionSchema).array(),
        z.lazy(() => CloudFileRegionSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => CloudFileRegionSchema).array(),
        z.lazy(() => CloudFileRegionSchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => CloudFileRegionSchema),
        z.lazy(() => NestedEnumCloudFileRegionWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumCloudFileRegionFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumCloudFileRegionFilterObjectSchema).optional(),
  })
  .strict()

export const EnumCloudFileRegionWithAggregatesFilterObjectSchema = Schema
