import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.CloudFileAvgAggregateInputType> = z
  .object({
    size: z.literal(true).optional(),
  })
  .strict()

export const CloudFileAvgAggregateInputObjectSchema = Schema
