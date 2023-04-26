import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PageSumAggregateInputType> = z
  .object({
    pageNumber: z.literal(true).optional(),
  })
  .strict()

export const PageSumAggregateInputObjectSchema = Schema
