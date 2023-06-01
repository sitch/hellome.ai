/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { DateTimeNullableWithAggregatesFilterObjectSchema } from "./DateTimeNullableWithAggregatesFilter.schema"
import { DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema"
import { IntWithAggregatesFilterObjectSchema } from "./IntWithAggregatesFilter.schema"
import { StringNullableListFilterObjectSchema } from "./StringNullableListFilter.schema"
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PhotoScalarWhereWithAggregatesInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PhotoScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => PhotoScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PhotoScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PhotoScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => PhotoScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    height: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    width: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    tags: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    fileId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
        z.union([z.date(), z.string().datetime().optional()]),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
        z.union([z.date(), z.string().datetime().optional()]),
      ])
      .optional(),
    deletedAt: z
      .union([
        z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema),
        z.union([z.date(), z.string().datetime().optional()]),
      ])
      .optional()
      .nullable(),
  })
  .strict()

export const PhotoScalarWhereWithAggregatesInputObjectSchema = Schema
