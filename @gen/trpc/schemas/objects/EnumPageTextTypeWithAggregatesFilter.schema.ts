import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextTypeSchema } from "../enums/PageTextType.schema"
import { NestedEnumPageTextTypeFilterObjectSchema } from "./NestedEnumPageTextTypeFilter.schema"
import { NestedEnumPageTextTypeWithAggregatesFilterObjectSchema } from "./NestedEnumPageTextTypeWithAggregatesFilter.schema"
import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema"

const Schema: z.ZodType<Prisma.EnumPageTextTypeWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => PageTextTypeSchema).optional(),
    in: z
      .lazy(() => PageTextTypeSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => PageTextTypeSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => PageTextTypeSchema),
        z.lazy(() => NestedEnumPageTextTypeWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumPageTextTypeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumPageTextTypeFilterObjectSchema).optional(),
  })
  .strict()

export const EnumPageTextTypeWithAggregatesFilterObjectSchema = Schema
