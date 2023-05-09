import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageStatusSchema } from "../enums/PageStatus.schema"
import { NestedEnumPageStatusFilterObjectSchema } from "./NestedEnumPageStatusFilter.schema"
import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema"

const Schema: z.ZodType<Prisma.NestedEnumPageStatusWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => PageStatusSchema).optional(),
    in: z
      .lazy(() => PageStatusSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => PageStatusSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => PageStatusSchema),
        z.lazy(() => NestedEnumPageStatusWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumPageStatusFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumPageStatusFilterObjectSchema).optional(),
  })
  .strict()

export const NestedEnumPageStatusWithAggregatesFilterObjectSchema = Schema
