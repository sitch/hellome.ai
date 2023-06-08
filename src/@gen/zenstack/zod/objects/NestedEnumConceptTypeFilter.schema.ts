/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptTypeSchema } from "../enums/ConceptType.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.NestedEnumConceptTypeFilter,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
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
        z.lazy(() => NestedEnumConceptTypeFilterObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const NestedEnumConceptTypeFilterObjectSchema = Schema
