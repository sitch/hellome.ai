import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PDFMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    height: z.literal(true).optional(),
    width: z.literal(true).optional(),
    pages: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    fileId: z.literal(true).optional(),
  })
  .strict()

export const PDFMaxAggregateInputObjectSchema = Schema
