import { z } from 'zod'
import { StorySelectObjectSchema } from './StorySelect.schema'
import { StoryIncludeObjectSchema } from './StoryInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.StoryArgs> = z
  .object({
    select: z.lazy(() => StorySelectObjectSchema).optional(),
    include: z.lazy(() => StoryIncludeObjectSchema).optional(),
  })
  .strict()

export const StoryArgsObjectSchema = Schema
