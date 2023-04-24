import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PDFCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    height: z.literal(true).optional(),
    width: z.literal(true).optional(),
    pages: z.literal(true).optional(),
    tags: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    fileId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const PDFCountAggregateInputObjectSchema = Schema
