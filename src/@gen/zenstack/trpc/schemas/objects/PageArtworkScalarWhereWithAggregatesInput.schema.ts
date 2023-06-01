/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageStatusSchema } from "../enums/PageStatus.schema"
import { DateTimeNullableWithAggregatesFilterObjectSchema } from "./DateTimeNullableWithAggregatesFilter.schema"
import { DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema"
import { EnumPageStatusWithAggregatesFilterObjectSchema } from "./EnumPageStatusWithAggregatesFilter.schema"
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageArtworkScalarWhereWithAggregatesInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PageArtworkScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => PageArtworkScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PageArtworkScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PageArtworkScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => PageArtworkScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    status: z
      .union([
        z.lazy(() => EnumPageStatusWithAggregatesFilterObjectSchema),
        z.lazy(() => PageStatusSchema),
      ])
      .optional(),
    pageId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    storyId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    artistId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    photoId: z
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

export const PageArtworkScalarWhereWithAggregatesInputObjectSchema = Schema
