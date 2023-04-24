import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.StoryCreateManyAuthorInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    artistId: z.string().optional().nullable(),
  })
  .strict()

export const StoryCreateManyAuthorInputObjectSchema = Schema
