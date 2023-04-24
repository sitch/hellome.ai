import { z } from 'zod'
import { StoryCreateNestedManyWithoutArtistInputObjectSchema } from './StoryCreateNestedManyWithoutArtistInput.schema'
import { PageArtworkCreateNestedManyWithoutArtistInputObjectSchema } from './PageArtworkCreateNestedManyWithoutArtistInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ArtistCreateInput> = z
  .object({
    id: z.string().optional(),
    stories: z
      .lazy(() => StoryCreateNestedManyWithoutArtistInputObjectSchema)
      .optional(),
    pageArtworks: z
      .lazy(() => PageArtworkCreateNestedManyWithoutArtistInputObjectSchema)
      .optional(),
  })
  .strict()

export const ArtistCreateInputObjectSchema = Schema
