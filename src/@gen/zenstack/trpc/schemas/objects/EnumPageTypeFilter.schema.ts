/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTypeSchema } from "../enums/PageType.schema"
import { NestedEnumPageTypeFilterObjectSchema } from "./NestedEnumPageTypeFilter.schema"

const Schema: z.ZodType<
  Omit<Prisma.EnumPageTypeFilter, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    equals: z.lazy(() => PageTypeSchema).optional(),
    in: z
      .union([
        z.lazy(() => PageTypeSchema).array(),
        z.lazy(() => PageTypeSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => PageTypeSchema).array(),
        z.lazy(() => PageTypeSchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => PageTypeSchema),
        z.lazy(() => NestedEnumPageTypeFilterObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const EnumPageTypeFilterObjectSchema = Schema
