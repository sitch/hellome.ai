import { z } from 'zod'
import { StoryArgsObjectSchema } from './StoryArgs.schema'
import { PageArtworkFindManySchema } from '../findManyPageArtwork.schema'
import { PageTextFindManySchema } from '../findManyPageText.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageInclude> = z
  .object({
    story: z
      .union([z.boolean(), z.lazy(() => StoryArgsObjectSchema)])
      .optional(),
    artworks: z
      .union([z.boolean(), z.lazy(() => PageArtworkFindManySchema)])
      .optional(),
    texts: z
      .union([z.boolean(), z.lazy(() => PageTextFindManySchema)])
      .optional(),
    _count: z.boolean().optional(),
  })
  .strict()

export const PageIncludeObjectSchema = Schema
