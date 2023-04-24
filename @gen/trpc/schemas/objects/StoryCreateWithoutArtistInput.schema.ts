import { z } from 'zod'
import { AuthorCreateNestedOneWithoutStoriesInputObjectSchema } from './AuthorCreateNestedOneWithoutStoriesInput.schema'
import { PageCreateNestedManyWithoutStoryInputObjectSchema } from './PageCreateNestedManyWithoutStoryInput.schema'
import { PageArtworkCreateNestedManyWithoutStoryInputObjectSchema } from './PageArtworkCreateNestedManyWithoutStoryInput.schema'
import { PageTextCreateNestedManyWithoutStoryInputObjectSchema } from './PageTextCreateNestedManyWithoutStoryInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.StoryCreateWithoutArtistInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
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

export const StoryCreateWithoutArtistInputObjectSchema = Schema
