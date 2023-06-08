/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ArtistCreateNestedOneWithoutStoriesInputObjectSchema } from "./ArtistCreateNestedOneWithoutStoriesInput.schema"
import { AuthorCreateNestedOneWithoutStoriesInputObjectSchema } from "./AuthorCreateNestedOneWithoutStoriesInput.schema"
import { PageArtworkCreateNestedManyWithoutStoryInputObjectSchema } from "./PageArtworkCreateNestedManyWithoutStoryInput.schema"
import { PageTextCreateNestedManyWithoutStoryInputObjectSchema } from "./PageTextCreateNestedManyWithoutStoryInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.StoryCreateWithoutPagesInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    id: z.string().optional(),
    createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    deletedAt: z
      .union([z.date().optional(), z.string().datetime().optional()])
      .nullable(),
    artist: z
      .lazy(() => ArtistCreateNestedOneWithoutStoriesInputObjectSchema)
      .optional(),
    author: z
      .lazy(() => AuthorCreateNestedOneWithoutStoriesInputObjectSchema)
      .optional(),
    pageArtworks: z
      .lazy(() => PageArtworkCreateNestedManyWithoutStoryInputObjectSchema)
      .optional(),
    pageTexts: z
      .lazy(() => PageTextCreateNestedManyWithoutStoryInputObjectSchema)
      .optional(),
  })
  .strict()

export const StoryCreateWithoutPagesInputObjectSchema = Schema
