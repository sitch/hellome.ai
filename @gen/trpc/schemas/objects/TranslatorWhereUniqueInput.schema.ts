import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.TranslatorWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict()

export const TranslatorWhereUniqueInputObjectSchema = Schema
