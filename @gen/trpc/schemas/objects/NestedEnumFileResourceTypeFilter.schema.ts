import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { FileResourceTypeSchema } from "../enums/FileResourceType.schema"

const Schema: z.ZodType<Prisma.NestedEnumFileResourceTypeFilter> = z
  .object({
    equals: z.lazy(() => FileResourceTypeSchema).optional(),
    in: z
      .lazy(() => FileResourceTypeSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => FileResourceTypeSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => FileResourceTypeSchema),
        z.lazy(() => NestedEnumFileResourceTypeFilterObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const NestedEnumFileResourceTypeFilterObjectSchema = Schema