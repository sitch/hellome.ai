import { TranslatorCountOutputTypeSelectObjectSchema } from './TranslatorCountOutputTypeSelect.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.TranslatorCountOutputTypeArgs> = z
  .object({
    select: z
      .lazy(() => TranslatorCountOutputTypeSelectObjectSchema)
      .optional(),
  })
  .strict()

export const TranslatorCountOutputTypeArgsObjectSchema = Schema
