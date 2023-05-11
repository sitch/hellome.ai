import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageStatusSchema } from "../enums/PageStatus.schema"
import { NestedEnumPageStatusFilterObjectSchema } from "./NestedEnumPageStatusFilter.schema"
import { NestedEnumPageStatusWithAggregatesFilterObjectSchema } from "./NestedEnumPageStatusWithAggregatesFilter.schema"
import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema"

const Schema: z.ZodType<Prisma.EnumPageStatusWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => PageStatusSchema).optional(),
    in: z
      .union([
        z.lazy(() => PageStatusSchema).array(),
        z.lazy(() => PageStatusSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => PageStatusSchema).array(),
        z.lazy(() => PageStatusSchema),
      ])
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

export const EnumPageStatusWithAggregatesFilterObjectSchema = Schema
