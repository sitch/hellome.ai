import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { CloudFileRegionSchema } from "../enums/CloudFileRegion.schema"
import { NestedEnumCloudFileRegionFilterObjectSchema } from "./NestedEnumCloudFileRegionFilter.schema"

const Schema: z.ZodType<Prisma.EnumCloudFileRegionFilter> = z
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
        z.lazy(() => NestedEnumCloudFileRegionFilterObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const EnumCloudFileRegionFilterObjectSchema = Schema
