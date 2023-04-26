import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.TranslatorMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
  })
  .strict()

export const TranslatorMaxAggregateInputObjectSchema = Schema
