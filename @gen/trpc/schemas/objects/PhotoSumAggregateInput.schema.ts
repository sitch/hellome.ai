import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PhotoSumAggregateInputType> = z
  .object({
    height: z.literal(true).optional(),
    width: z.literal(true).optional(),
  })
  .strict()

export const PhotoSumAggregateInputObjectSchema = Schema
