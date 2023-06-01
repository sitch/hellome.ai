/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { CloudFileRelationFilterObjectSchema } from "./CloudFileRelationFilter.schema"
import { CloudFileWhereInputObjectSchema } from "./CloudFileWhereInput.schema"
import { ConceptListRelationFilterObjectSchema } from "./ConceptListRelationFilter.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema"
import { IntFilterObjectSchema } from "./IntFilter.schema"
import { PageArtworkListRelationFilterObjectSchema } from "./PageArtworkListRelationFilter.schema"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { StringNullableListFilterObjectSchema } from "./StringNullableListFilter.schema"

const Schema: z.ZodType<
  Omit<Prisma.PhotoWhereInput, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PhotoWhereInputObjectSchema),
        z.lazy(() => PhotoWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PhotoWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PhotoWhereInputObjectSchema),
        z.lazy(() => PhotoWhereInputObjectSchema).array(),
      ])
      .optional(),
    height: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    width: z
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
    pageArtworks: z
      .lazy(() => PageArtworkListRelationFilterObjectSchema)
      .optional(),
    concepts: z.lazy(() => ConceptListRelationFilterObjectSchema).optional(),
  })
  .strict()

export const PhotoWhereInputObjectSchema = Schema
