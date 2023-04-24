import { z } from 'zod'
import { PageArgsObjectSchema } from './PageArgs.schema'
import { StoryArgsObjectSchema } from './StoryArgs.schema'
import { ArtistArgsObjectSchema } from './ArtistArgs.schema'
import { PhotoArgsObjectSchema } from './PhotoArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageArtworkInclude> = z
  .object({
    page: z.union([z.boolean(), z.lazy(() => PageArgsObjectSchema)]).optional(),
    story: z
      .union([z.boolean(), z.lazy(() => StoryArgsObjectSchema)])
      .optional(),
    artist: z
      .union([z.boolean(), z.lazy(() => ArtistArgsObjectSchema)])
      .optional(),
    photo: z
      .union([z.boolean(), z.lazy(() => PhotoArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const PageArtworkIncludeObjectSchema = Schema
