/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { CloudFileRelationFilterObjectSchema } from "./CloudFileRelationFilter.schema"
import { CloudFileWhereInputObjectSchema } from "./CloudFileWhereInput.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema"
import { EditionRelationFilterObjectSchema } from "./EditionRelationFilter.schema"
import { EditionWhereInputObjectSchema } from "./EditionWhereInput.schema"
import { IntFilterObjectSchema } from "./IntFilter.schema"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { StringNullableListFilterObjectSchema } from "./StringNullableListFilter.schema"

const Schema: z.ZodType<
  Omit<Prisma.PDFWhereInput, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PDFWhereInputObjectSchema),
        z.lazy(() => PDFWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PDFWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PDFWhereInputObjectSchema),
        z.lazy(() => PDFWhereInputObjectSchema).array(),
      ])
      .optional(),
    height: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    width: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    pages: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    tags: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    fileId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
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
    file: z
      .union([
        z.lazy(() => CloudFileRelationFilterObjectSchema),
        z.lazy(() => CloudFileWhereInputObjectSchema),
      ])
      .optional(),
    edition: z
      .union([
        z.lazy(() => EditionRelationFilterObjectSchema),
        z.lazy(() => EditionWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict()

export const PDFWhereInputObjectSchema = Schema
