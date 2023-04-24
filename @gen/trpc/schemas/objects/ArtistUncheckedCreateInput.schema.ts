import { z } from 'zod'
import { StoryUncheckedCreateNestedManyWithoutArtistInputObjectSchema } from './StoryUncheckedCreateNestedManyWithoutArtistInput.schema'
import { PageArtworkUncheckedCreateNestedManyWithoutArtistInputObjectSchema } from './PageArtworkUncheckedCreateNestedManyWithoutArtistInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ArtistUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    stories: z
      .lazy(() => StoryUncheckedCreateNestedManyWithoutArtistInputObjectSchema)
      .optional(),
    pageArtworks: z
      .lazy(
        () => PageArtworkUncheckedCreateNestedManyWithoutArtistInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const ArtistUncheckedCreateInputObjectSchema = Schema
