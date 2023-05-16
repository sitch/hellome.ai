import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { FileResourceTypeSchema } from "../enums/FileResourceType.schema"

const Schema: z.ZodType<Prisma.NestedEnumFileResourceTypeFilter> = z
  .object({
    equals: z.lazy(() => FileResourceTypeSchema).optional(),
    in: z
      .union([
        z.lazy(() => FileResourceTypeSchema).array(),
        z.lazy(() => FileResourceTypeSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => FileResourceTypeSchema).array(),
        z.lazy(() => FileResourceTypeSchema),
      ])
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
