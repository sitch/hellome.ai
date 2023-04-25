import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TranslatorCountOutputTypeSelect> = z
  .object({
    pageTexts: z.boolean().optional(),
  })
  .strict()

export const TranslatorCountOutputTypeSelectObjectSchema = Schema
