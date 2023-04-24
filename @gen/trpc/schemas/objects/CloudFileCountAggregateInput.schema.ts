import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CloudFileCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    resourceType: z.literal(true).optional(),
    filename: z.literal(true).optional(),
    size: z.literal(true).optional(),
    ext: z.literal(true).optional(),
    mime: z.literal(true).optional(),
    metadata: z.literal(true).optional(),
    path: z.literal(true).optional(),
    signature: z.literal(true).optional(),
    privacy: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const CloudFileCountAggregateInputObjectSchema = Schema
