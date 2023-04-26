import { PageArtworkFindManySchema } from '../findManyPageArtwork.schema'
import { StoryFindManySchema } from '../findManyStory.schema'
import { ArtistCountOutputTypeArgsObjectSchema } from './ArtistCountOutputTypeArgs.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.ArtistInclude> = z
  .object({
    stories: z
      .union([z.boolean(), z.lazy(() => StoryFindManySchema)])
      .optional(),
    pageArtworks: z
      .union([z.boolean(), z.lazy(() => PageArtworkFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => ArtistCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const ArtistIncludeObjectSchema = Schema
