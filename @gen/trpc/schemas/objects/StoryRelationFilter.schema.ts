import { StoryWhereInputObjectSchema } from './StoryWhereInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.StoryRelationFilter> = z
  .object({
    is: z.lazy(() => StoryWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => StoryWhereInputObjectSchema).optional(),
  })
  .strict()

export const StoryRelationFilterObjectSchema = Schema
