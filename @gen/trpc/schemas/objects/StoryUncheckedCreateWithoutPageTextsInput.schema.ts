import { z } from 'zod'
import { PageUncheckedCreateNestedManyWithoutStoryInputObjectSchema } from './PageUncheckedCreateNestedManyWithoutStoryInput.schema'
import { PageArtworkUncheckedCreateNestedManyWithoutStoryInputObjectSchema } from './PageArtworkUncheckedCreateNestedManyWithoutStoryInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.StoryUncheckedCreateWithoutPageTextsInput> = z
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
  })
  .strict()

export const StoryUncheckedCreateWithoutPageTextsInputObjectSchema = Schema