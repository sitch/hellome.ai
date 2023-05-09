import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { CloudFileRegionSchema } from "../enums/CloudFileRegion.schema"

const Schema: z.ZodType<Prisma.NestedEnumCloudFileRegionFilter> = z
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
        z.lazy(() => NestedEnumCloudFileRegionFilterObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const NestedEnumCloudFileRegionFilterObjectSchema = Schema
