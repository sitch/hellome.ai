import { z } from 'zod'
import { TranslatorCountOutputTypeSelectObjectSchema } from './TranslatorCountOutputTypeSelect.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TranslatorCountOutputTypeArgs> = z
  .object({
    select: z
      .lazy(() => TranslatorCountOutputTypeSelectObjectSchema)
      .optional(),
  })
  .strict()

export const TranslatorCountOutputTypeArgsObjectSchema = Schema
