import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptStatusSchema } from "../enums/ConceptStatus.schema"

const Schema: z.ZodType<Prisma.NestedEnumConceptStatusFilter> = z
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
        z.lazy(() => NestedEnumConceptStatusFilterObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const NestedEnumConceptStatusFilterObjectSchema = Schema
