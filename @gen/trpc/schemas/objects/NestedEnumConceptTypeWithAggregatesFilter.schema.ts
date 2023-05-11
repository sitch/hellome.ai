import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptTypeSchema } from "../enums/ConceptType.schema"
import { NestedEnumConceptTypeFilterObjectSchema } from "./NestedEnumConceptTypeFilter.schema"
import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema"

const Schema: z.ZodType<Prisma.NestedEnumConceptTypeWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => ConceptTypeSchema).optional(),
    in: z
      .union([
        z.lazy(() => ConceptTypeSchema).array(),
        z.lazy(() => ConceptTypeSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => ConceptTypeSchema).array(),
        z.lazy(() => ConceptTypeSchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => ConceptTypeSchema),
        z.lazy(() => NestedEnumConceptTypeWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumConceptTypeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumConceptTypeFilterObjectSchema).optional(),
  })
  .strict()

export const NestedEnumConceptTypeWithAggregatesFilterObjectSchema = Schema
