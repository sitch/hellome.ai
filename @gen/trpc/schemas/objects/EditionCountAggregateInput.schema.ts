import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.EditionCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    pdfId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const EditionCountAggregateInputObjectSchema = Schema
