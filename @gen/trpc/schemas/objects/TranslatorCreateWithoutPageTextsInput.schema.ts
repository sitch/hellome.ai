import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.TranslatorCreateWithoutPageTextsInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict()

export const TranslatorCreateWithoutPageTextsInputObjectSchema = Schema
