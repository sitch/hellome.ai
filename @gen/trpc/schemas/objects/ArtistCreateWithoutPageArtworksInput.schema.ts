import { z } from 'zod'
import { StoryCreateNestedManyWithoutArtistInputObjectSchema } from './StoryCreateNestedManyWithoutArtistInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ArtistCreateWithoutPageArtworksInput> = z
  .object({
    id: z.string().optional(),
    stories: z
      .lazy(() => StoryCreateNestedManyWithoutArtistInputObjectSchema)
      .optional(),
  })
  .strict()

export const ArtistCreateWithoutPageArtworksInputObjectSchema = Schema