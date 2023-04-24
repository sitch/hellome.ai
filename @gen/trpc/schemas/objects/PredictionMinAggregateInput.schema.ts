import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PredictionMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    uuid: z.literal(true).optional(),
    status: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    started_at: z.literal(true).optional(),
    completed_at: z.literal(true).optional(),
    version: z.literal(true).optional(),
    error: z.literal(true).optional(),
    logs: z.literal(true).optional(),
  })
  .strict()

export const PredictionMinAggregateInputObjectSchema = Schema