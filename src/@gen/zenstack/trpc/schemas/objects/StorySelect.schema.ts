/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageSchema } from "../Page.schema"
import { PageArtworkSchema } from "../PageArtwork.schema"
import { PageTextSchema } from "../PageText.schema"
import { ArtistArgsObjectSchema } from "./ArtistArgs.schema"
import { AuthorArgsObjectSchema } from "./AuthorArgs.schema"
import { StoryCountOutputTypeArgsObjectSchema } from "./StoryCountOutputTypeArgs.schema"

const Schema: z.ZodType<
  Omit<Prisma.StorySelect, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    artistId: z.boolean().optional(),
    authorId: z.boolean().optional(),
    artist: z
      .union([z.boolean(), z.lazy(() => ArtistArgsObjectSchema)])
      .optional(),
    author: z
      .union([z.boolean(), z.lazy(() => AuthorArgsObjectSchema)])
      .optional(),
    pages: z.union([z.boolean(), z.lazy(() => PageSchema.findMany)]).optional(),
    pageArtworks: z
      .union([z.boolean(), z.lazy(() => PageArtworkSchema.findMany)])
      .optional(),
    pageTexts: z
      .union([z.boolean(), z.lazy(() => PageTextSchema.findMany)])
      .optional(),
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => StoryCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const StorySelectObjectSchema = Schema
