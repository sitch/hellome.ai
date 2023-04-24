import { z } from 'zod'
import { TranslatorIncludeObjectSchema } from './TranslatorInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TranslatorArgs> = z
  .object({
    include: z.lazy(() => TranslatorIncludeObjectSchema).optional(),
  })
  .strict()

export const TranslatorArgsObjectSchema = Schema
