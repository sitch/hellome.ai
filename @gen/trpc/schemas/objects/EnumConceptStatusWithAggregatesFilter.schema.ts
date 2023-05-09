import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptStatusSchema } from "../enums/ConceptStatus.schema"
import { NestedEnumConceptStatusFilterObjectSchema } from "./NestedEnumConceptStatusFilter.schema"
import { NestedEnumConceptStatusWithAggregatesFilterObjectSchema } from "./NestedEnumConceptStatusWithAggregatesFilter.schema"
import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema"

const Schema: z.ZodType<Prisma.EnumConceptStatusWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => ConceptStatusSchema).optional(),
    in: z
      .lazy(() => ConceptStatusSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => ConceptStatusSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => ConceptStatusSchema),
        z.lazy(() => NestedEnumConceptStatusWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumConceptStatusFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumConceptStatusFilterObjectSchema).optional(),
  })
  .strict()

export const EnumConceptStatusWithAggregatesFilterObjectSchema = Schema
