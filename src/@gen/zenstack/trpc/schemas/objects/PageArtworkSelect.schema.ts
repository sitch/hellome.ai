/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ArtistArgsObjectSchema } from "./ArtistArgs.schema"
import { PageArgsObjectSchema } from "./PageArgs.schema"
import { PhotoArgsObjectSchema } from "./PhotoArgs.schema"
import { StoryArgsObjectSchema } from "./StoryArgs.schema"

const Schema: z.ZodType<
  Omit<Prisma.PageArtworkSelect, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    status: z.boolean().optional(),
    pageId: z.boolean().optional(),
    storyId: z.boolean().optional(),
    artistId: z.boolean().optional(),
    photoId: z.boolean().optional(),
    page: z.union([z.boolean(), z.lazy(() => PageArgsObjectSchema)]).optional(),
    story: z
      .union([z.boolean(), z.lazy(() => StoryArgsObjectSchema)])
      .optional(),
    artist: z
      .union([z.boolean(), z.lazy(() => ArtistArgsObjectSchema)])
      .optional(),
    photo: z
      .union([z.boolean(), z.lazy(() => PhotoArgsObjectSchema)])
      .optional(),
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
  })
  .strict()

export const PageArtworkSelectObjectSchema = Schema
