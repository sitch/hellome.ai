import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageAvgAggregateInputType> = z
  .object({
    pageNumber: z.literal(true).optional(),
  })
  .strict()

export const PageAvgAggregateInputObjectSchema = Schema
