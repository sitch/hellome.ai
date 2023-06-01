/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptStatusSchema } from "../enums/ConceptStatus.schema"
import { NestedEnumConceptStatusFilterObjectSchema } from "./NestedEnumConceptStatusFilter.schema"
import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.NestedEnumConceptStatusWithAggregatesFilter,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    equals: z.lazy(() => ConceptStatusSchema).optional(),
    in: z
      .union([
        z.lazy(() => ConceptStatusSchema).array(),
        z.lazy(() => ConceptStatusSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => ConceptStatusSchema).array(),
        z.lazy(() => ConceptStatusSchema),
      ])
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

export const NestedEnumConceptStatusWithAggregatesFilterObjectSchema = Schema
