import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptTypeSchema } from "../enums/ConceptType.schema"
import { NestedEnumConceptTypeFilterObjectSchema } from "./NestedEnumConceptTypeFilter.schema"

const Schema: z.ZodType<Prisma.EnumConceptTypeFilter> = z
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

export const EnumConceptTypeFilterObjectSchema = Schema
