import { ArtistCreateNestedOneWithoutStoriesInputObjectSchema } from './ArtistCreateNestedOneWithoutStoriesInput.schema'
import { AuthorCreateNestedOneWithoutStoriesInputObjectSchema } from './AuthorCreateNestedOneWithoutStoriesInput.schema'
import { PageArtworkCreateNestedManyWithoutStoryInputObjectSchema } from './PageArtworkCreateNestedManyWithoutStoryInput.schema'
import { PageCreateNestedManyWithoutStoryInputObjectSchema } from './PageCreateNestedManyWithoutStoryInput.schema'
import { PageTextCreateNestedManyWithoutStoryInputObjectSchema } from './PageTextCreateNestedManyWithoutStoryInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.StoryCreateInput> = z
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
    pageTexts: z
      .lazy(() => PageTextCreateNestedManyWithoutStoryInputObjectSchema)
      .optional(),
  })
  .strict()

export const StoryCreateInputObjectSchema = Schema
