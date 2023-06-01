/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageStatusSchema } from "../enums/PageStatus.schema"
import { PageTypeSchema } from "../enums/PageType.schema"
import { DateTimeNullableWithAggregatesFilterObjectSchema } from "./DateTimeNullableWithAggregatesFilter.schema"
import { DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema"
import { EnumPageStatusWithAggregatesFilterObjectSchema } from "./EnumPageStatusWithAggregatesFilter.schema"
import { EnumPageTypeWithAggregatesFilterObjectSchema } from "./EnumPageTypeWithAggregatesFilter.schema"
import { IntWithAggregatesFilterObjectSchema } from "./IntWithAggregatesFilter.schema"
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageScalarWhereWithAggregatesInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PageScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => PageScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PageScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PageScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => PageScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    status: z
      .union([
        z.lazy(() => EnumPageStatusWithAggregatesFilterObjectSchema),
        z.lazy(() => PageStatusSchema),
      ])
      .optional(),
    type: z
      .union([
        z.lazy(() => EnumPageTypeWithAggregatesFilterObjectSchema),
        z.lazy(() => PageTypeSchema),
      ])
      .optional(),
    pageNumber: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    storyId: z
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

export const PageScalarWhereWithAggregatesInputObjectSchema = Schema
