import { z } from 'zod'
import { StoryFindManySchema } from '../findManyStory.schema'
import { PageArtworkFindManySchema } from '../findManyPageArtwork.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ArtistInclude> = z
  .object({
    stories: z
      .union([z.boolean(), z.lazy(() => StoryFindManySchema)])
      .optional(),
    pageArtworks: z
      .union([z.boolean(), z.lazy(() => PageArtworkFindManySchema)])
      .optional(),
    _count: z.boolean().optional(),
  })
  .strict()

export const ArtistIncludeObjectSchema = Schema
