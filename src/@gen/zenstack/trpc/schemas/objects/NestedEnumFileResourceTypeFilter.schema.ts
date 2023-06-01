/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { FileResourceTypeSchema } from "../enums/FileResourceType.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.NestedEnumFileResourceTypeFilter,
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
        z.lazy(() => NestedEnumFileResourceTypeFilterObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const NestedEnumFileResourceTypeFilterObjectSchema = Schema
