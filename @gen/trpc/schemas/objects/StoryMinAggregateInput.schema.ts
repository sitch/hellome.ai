import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.StoryMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    artistId: z.literal(true).optional(),
    authorId: z.literal(true).optional(),
  })
  .strict()

export const StoryMinAggregateInputObjectSchema = Schema
