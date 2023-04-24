import { z } from 'zod'
import { PageUncheckedCreateNestedManyWithoutStoryInputObjectSchema } from './PageUncheckedCreateNestedManyWithoutStoryInput.schema'
import { PageArtworkUncheckedCreateNestedManyWithoutStoryInputObjectSchema } from './PageArtworkUncheckedCreateNestedManyWithoutStoryInput.schema'
import { PageTextUncheckedCreateNestedManyWithoutStoryInputObjectSchema } from './PageTextUncheckedCreateNestedManyWithoutStoryInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.StoryUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    artistId: z.string().optional().nullable(),
    authorId: z.string().optional().nullable(),
    pages: z
      .lazy(() => PageUncheckedCreateNestedManyWithoutStoryInputObjectSchema)
      .optional(),
    pageArtworks: z
      .lazy(
        () => PageArtworkUncheckedCreateNestedManyWithoutStoryInputObjectSchema
      )
      .optional(),
    pageTexts: z
      .lazy(
        () => PageTextUncheckedCreateNestedManyWithoutStoryInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const StoryUncheckedCreateInputObjectSchema = Schema
