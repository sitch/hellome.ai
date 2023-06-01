/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema"
import { PageTextListRelationFilterObjectSchema } from "./PageTextListRelationFilter.schema"
import { StringFilterObjectSchema } from "./StringFilter.schema"

const Schema: z.ZodType<
  Omit<Prisma.TranslatorWhereInput, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TranslatorWhereInputObjectSchema),
        z.lazy(() => TranslatorWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TranslatorWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TranslatorWhereInputObjectSchema),
        z.lazy(() => TranslatorWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([
        z.lazy(() => DateTimeFilterObjectSchema),
        z.union([z.date(), z.string().datetime().optional()]),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.lazy(() => DateTimeFilterObjectSchema),
        z.union([z.date(), z.string().datetime().optional()]),
      ])
      .optional(),
    deletedAt: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.union([z.date(), z.string().datetime().optional()]),
      ])
      .optional()
      .nullable(),
    pageTexts: z.lazy(() => PageTextListRelationFilterObjectSchema).optional(),
  })
  .strict()

export const TranslatorWhereInputObjectSchema = Schema
