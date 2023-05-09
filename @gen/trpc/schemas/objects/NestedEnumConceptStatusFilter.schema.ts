import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptStatusSchema } from "../enums/ConceptStatus.schema"

const Schema: z.ZodType<Prisma.NestedEnumConceptStatusFilter> = z
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
        z.lazy(() => NestedEnumConceptStatusFilterObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const NestedEnumConceptStatusFilterObjectSchema = Schema
