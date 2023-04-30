import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptTypeSchema } from "../enums/ConceptType.schema"

const Schema: z.ZodType<Prisma.NestedEnumConceptTypeFilter> = z
  .object({
    equals: z.lazy(() => ConceptTypeSchema).optional(),
    in: z
      .lazy(() => ConceptTypeSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => ConceptTypeSchema)
      .array()
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