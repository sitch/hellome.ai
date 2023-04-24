import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageSumAggregateInputType> = z
  .object({
    pageNumber: z.literal(true).optional(),
  })
  .strict()

export const PageSumAggregateInputObjectSchema = Schema
