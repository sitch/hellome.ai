/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageStatusSchema } from "../enums/PageStatus.schema"
import { ArtistRelationFilterObjectSchema } from "./ArtistRelationFilter.schema"
import { ArtistWhereInputObjectSchema } from "./ArtistWhereInput.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema"
import { EnumPageStatusFilterObjectSchema } from "./EnumPageStatusFilter.schema"
import { PageRelationFilterObjectSchema } from "./PageRelationFilter.schema"
import { PageWhereInputObjectSchema } from "./PageWhereInput.schema"
import { PhotoRelationFilterObjectSchema } from "./PhotoRelationFilter.schema"
import { PhotoWhereInputObjectSchema } from "./PhotoWhereInput.schema"
import { StoryRelationFilterObjectSchema } from "./StoryRelationFilter.schema"
import { StoryWhereInputObjectSchema } from "./StoryWhereInput.schema"
import { StringFilterObjectSchema } from "./StringFilter.schema"

const Schema: z.ZodType<
  Omit<Prisma.PageArtworkWhereInput, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PageArtworkWhereInputObjectSchema),
        z.lazy(() => PageArtworkWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PageArtworkWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PageArtworkWhereInputObjectSchema),
        z.lazy(() => PageArtworkWhereInputObjectSchema).array(),
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
    page: z
      .union([
        z.lazy(() => PageRelationFilterObjectSchema),
        z.lazy(() => PageWhereInputObjectSchema),
      ])
      .optional(),
    story: z
      .union([
        z.lazy(() => StoryRelationFilterObjectSchema),
        z.lazy(() => StoryWhereInputObjectSchema),
      ])
      .optional(),
    artist: z
      .union([
        z.lazy(() => ArtistRelationFilterObjectSchema),
        z.lazy(() => ArtistWhereInputObjectSchema),
      ])
      .optional(),
    photo: z
      .union([
        z.lazy(() => PhotoRelationFilterObjectSchema),
        z.lazy(() => PhotoWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const PageArtworkWhereInputObjectSchema = Schema
