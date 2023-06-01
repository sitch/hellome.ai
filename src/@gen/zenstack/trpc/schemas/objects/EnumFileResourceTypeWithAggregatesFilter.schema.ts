/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { FileResourceTypeSchema } from "../enums/FileResourceType.schema"
import { NestedEnumFileResourceTypeFilterObjectSchema } from "./NestedEnumFileResourceTypeFilter.schema"
import { NestedEnumFileResourceTypeWithAggregatesFilterObjectSchema } from "./NestedEnumFileResourceTypeWithAggregatesFilter.schema"
import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.EnumFileResourceTypeWithAggregatesFilter,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
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
        z.lazy(
          () => NestedEnumFileResourceTypeWithAggregatesFilterObjectSchema,
        ),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumFileResourceTypeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumFileResourceTypeFilterObjectSchema).optional(),
  })
  .strict()

export const EnumFileResourceTypeWithAggregatesFilterObjectSchema = Schema
