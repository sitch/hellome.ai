import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.StoryWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict()

export const StoryWhereUniqueInputObjectSchema = Schema
