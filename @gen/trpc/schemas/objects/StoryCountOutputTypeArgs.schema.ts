import { StoryCountOutputTypeSelectObjectSchema } from './StoryCountOutputTypeSelect.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.StoryCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => StoryCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const StoryCountOutputTypeArgsObjectSchema = Schema
