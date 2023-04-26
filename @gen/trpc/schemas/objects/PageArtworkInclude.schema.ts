import { ArtistArgsObjectSchema } from './ArtistArgs.schema'
import { PageArgsObjectSchema } from './PageArgs.schema'
import { PhotoArgsObjectSchema } from './PhotoArgs.schema'
import { StoryArgsObjectSchema } from './StoryArgs.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

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
