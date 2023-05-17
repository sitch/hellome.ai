import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ArtistCreateNestedOneWithoutStoriesInputObjectSchema } from "./ArtistCreateNestedOneWithoutStoriesInput.schema"
import { AuthorCreateNestedOneWithoutStoriesInputObjectSchema } from "./AuthorCreateNestedOneWithoutStoriesInput.schema"
import { PageArtworkCreateNestedManyWithoutStoryInputObjectSchema } from "./PageArtworkCreateNestedManyWithoutStoryInput.schema"
import { PageCreateNestedManyWithoutStoryInputObjectSchema } from "./PageCreateNestedManyWithoutStoryInput.schema"

const Schema: z.ZodType<Prisma.StoryCreateWithoutPageTextsInput> = z
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
    pages: z
      .lazy(() => PageCreateNestedManyWithoutStoryInputObjectSchema)
      .optional(),
    pageArtworks: z
      .lazy(() => PageArtworkCreateNestedManyWithoutStoryInputObjectSchema)
      .optional(),
  })
  .strict()

export const StoryCreateWithoutPageTextsInputObjectSchema = Schema
