import { z } from 'zod'
import { ArtistCreateNestedOneWithoutStoriesInputObjectSchema } from './ArtistCreateNestedOneWithoutStoriesInput.schema'
import { AuthorCreateNestedOneWithoutStoriesInputObjectSchema } from './AuthorCreateNestedOneWithoutStoriesInput.schema'
import { PageCreateNestedManyWithoutStoryInputObjectSchema } from './PageCreateNestedManyWithoutStoryInput.schema'
import { PageTextCreateNestedManyWithoutStoryInputObjectSchema } from './PageTextCreateNestedManyWithoutStoryInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.StoryCreateWithoutPageArtworksInput> = z
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
    pageTexts: z
      .lazy(() => PageTextCreateNestedManyWithoutStoryInputObjectSchema)
      .optional(),
  })
  .strict()

export const StoryCreateWithoutPageArtworksInputObjectSchema = Schema
