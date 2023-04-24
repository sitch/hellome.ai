import { z } from 'zod'
import { ArtistArgsObjectSchema } from './ArtistArgs.schema'
import { AuthorArgsObjectSchema } from './AuthorArgs.schema'
import { PageFindManySchema } from '../findManyPage.schema'
import { PageArtworkFindManySchema } from '../findManyPageArtwork.schema'
import { PageTextFindManySchema } from '../findManyPageText.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.StoryInclude> = z
  .object({
    artist: z
      .union([z.boolean(), z.lazy(() => ArtistArgsObjectSchema)])
      .optional(),
    author: z
      .union([z.boolean(), z.lazy(() => AuthorArgsObjectSchema)])
      .optional(),
    pages: z.union([z.boolean(), z.lazy(() => PageFindManySchema)]).optional(),
    pageArtworks: z
      .union([z.boolean(), z.lazy(() => PageArtworkFindManySchema)])
      .optional(),
    pageTexts: z
      .union([z.boolean(), z.lazy(() => PageTextFindManySchema)])
      .optional(),
    _count: z.boolean().optional(),
  })
  .strict()

export const StoryIncludeObjectSchema = Schema
