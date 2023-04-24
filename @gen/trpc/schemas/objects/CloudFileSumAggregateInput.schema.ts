import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CloudFileSumAggregateInputType> = z
  .object({
    size: z.literal(true).optional(),
  })
  .strict()

export const CloudFileSumAggregateInputObjectSchema = Schema
