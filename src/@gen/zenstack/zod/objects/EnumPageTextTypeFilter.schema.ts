/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextTypeSchema } from "../enums/PageTextType.schema"
import { NestedEnumPageTextTypeFilterObjectSchema } from "./NestedEnumPageTextTypeFilter.schema"

const Schema: z.ZodType<
  Omit<Prisma.EnumPageTextTypeFilter, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    equals: z.lazy(() => PageTextTypeSchema).optional(),
    in: z
      .union([
        z.lazy(() => PageTextTypeSchema).array(),
        z.lazy(() => PageTextTypeSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => PageTextTypeSchema).array(),
        z.lazy(() => PageTextTypeSchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => PageTextTypeSchema),
        z.lazy(() => NestedEnumPageTextTypeFilterObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const EnumPageTextTypeFilterObjectSchema = Schema
