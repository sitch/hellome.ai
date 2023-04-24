import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PDFSumAggregateInputType> = z
  .object({
    height: z.literal(true).optional(),
    width: z.literal(true).optional(),
    pages: z.literal(true).optional(),
  })
  .strict()

export const PDFSumAggregateInputObjectSchema = Schema
