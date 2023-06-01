/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageStatusSchema } from "../enums/PageStatus.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema"
import { EnumPageStatusFilterObjectSchema } from "./EnumPageStatusFilter.schema"
import { StringFilterObjectSchema } from "./StringFilter.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageArtworkScalarWhereInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PageArtworkScalarWhereInputObjectSchema),
        z.lazy(() => PageArtworkScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PageArtworkScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PageArtworkScalarWhereInputObjectSchema),
        z.lazy(() => PageArtworkScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    status: z
      .union([
        z.lazy(() => EnumPageStatusFilterObjectSchema),
        z.lazy(() => PageStatusSchema),
      ])
      .optional(),
    pageId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    storyId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    artistId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    photoId: z
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

export const PageArtworkScalarWhereInputObjectSchema = Schema
