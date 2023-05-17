import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ArtistCreateNestedOneWithoutStoriesInputObjectSchema } from "./ArtistCreateNestedOneWithoutStoriesInput.schema"
import { AuthorCreateNestedOneWithoutStoriesInputObjectSchema } from "./AuthorCreateNestedOneWithoutStoriesInput.schema"
import { PageArtworkCreateNestedManyWithoutStoryInputObjectSchema } from "./PageArtworkCreateNestedManyWithoutStoryInput.schema"
import { PageTextCreateNestedManyWithoutStoryInputObjectSchema } from "./PageTextCreateNestedManyWithoutStoryInput.schema"

const Schema: z.ZodType<Prisma.StoryCreateWithoutPagesInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
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
