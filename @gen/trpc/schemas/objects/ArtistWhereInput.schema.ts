import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StoryListRelationFilterObjectSchema } from './StoryListRelationFilter.schema'
import { PageArtworkListRelationFilterObjectSchema } from './PageArtworkListRelationFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ArtistWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ArtistWhereInputObjectSchema),
        z.lazy(() => ArtistWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ArtistWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ArtistWhereInputObjectSchema),
        z.lazy(() => ArtistWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    stories: z.lazy(() => StoryListRelationFilterObjectSchema).optional(),
    pageArtworks: z
      .lazy(() => PageArtworkListRelationFilterObjectSchema)
      .optional(),
  })
  .strict()

export const ArtistWhereInputObjectSchema = Schema
