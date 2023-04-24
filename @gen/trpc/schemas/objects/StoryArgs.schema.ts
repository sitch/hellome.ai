import { z } from 'zod'
import { StoryIncludeObjectSchema } from './StoryInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.StoryArgs> = z
  .object({
    include: z.lazy(() => StoryIncludeObjectSchema).optional(),
  })
  .strict()

export const StoryArgsObjectSchema = Schema
