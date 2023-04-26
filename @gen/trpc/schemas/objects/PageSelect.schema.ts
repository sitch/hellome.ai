import { PageArtworkFindManySchema } from '../findManyPageArtwork.schema'
import { PageTextFindManySchema } from '../findManyPageText.schema'
import { PageCountOutputTypeArgsObjectSchema } from './PageCountOutputTypeArgs.schema'
import { StoryArgsObjectSchema } from './StoryArgs.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PageSelect> = z
  .object({
    id: z.boolean().optional(),
    status: z.boolean().optional(),
    type: z.boolean().optional(),
    pageNumber: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    storyId: z.boolean().optional(),
    story: z
      .union([z.boolean(), z.lazy(() => StoryArgsObjectSchema)])
      .optional(),
    artworks: z
      .union([z.boolean(), z.lazy(() => PageArtworkFindManySchema)])
      .optional(),
    texts: z
      .union([z.boolean(), z.lazy(() => PageTextFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => PageCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const PageSelectObjectSchema = Schema
