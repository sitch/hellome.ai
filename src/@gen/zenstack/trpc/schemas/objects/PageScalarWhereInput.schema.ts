/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageStatusSchema } from "../enums/PageStatus.schema"
import { PageTypeSchema } from "../enums/PageType.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema"
import { EnumPageStatusFilterObjectSchema } from "./EnumPageStatusFilter.schema"
import { EnumPageTypeFilterObjectSchema } from "./EnumPageTypeFilter.schema"
import { IntFilterObjectSchema } from "./IntFilter.schema"
import { StringFilterObjectSchema } from "./StringFilter.schema"

const Schema: z.ZodType<
  Omit<Prisma.PageScalarWhereInput, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PageScalarWhereInputObjectSchema),
        z.lazy(() => PageScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PageScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PageScalarWhereInputObjectSchema),
        z.lazy(() => PageScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    status: z
      .union([
        z.lazy(() => EnumPageStatusFilterObjectSchema),
        z.lazy(() => PageStatusSchema),
      ])
      .optional(),
    type: z
      .union([
        z.lazy(() => EnumPageTypeFilterObjectSchema),
        z.lazy(() => PageTypeSchema),
      ])
      .optional(),
    pageNumber: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    storyId: z
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
  })
  .strict()

export const PageScalarWhereInputObjectSchema = Schema
