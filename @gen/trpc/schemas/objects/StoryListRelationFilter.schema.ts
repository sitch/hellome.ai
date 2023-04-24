import { z } from 'zod'
import { StoryWhereInputObjectSchema } from './StoryWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.StoryListRelationFilter> = z
  .object({
    every: z.lazy(() => StoryWhereInputObjectSchema).optional(),
    some: z.lazy(() => StoryWhereInputObjectSchema).optional(),
    none: z.lazy(() => StoryWhereInputObjectSchema).optional(),
  })
  .strict()

export const StoryListRelationFilterObjectSchema = Schema
