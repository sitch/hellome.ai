import { z } from 'zod'
import { PageArtworkCreateNestedManyWithoutArtistInputObjectSchema } from './PageArtworkCreateNestedManyWithoutArtistInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ArtistCreateWithoutStoriesInput> = z
  .object({
    id: z.string().optional(),
    pageArtworks: z
      .lazy(() => PageArtworkCreateNestedManyWithoutArtistInputObjectSchema)
      .optional(),
  })
  .strict()

export const ArtistCreateWithoutStoriesInputObjectSchema = Schema
