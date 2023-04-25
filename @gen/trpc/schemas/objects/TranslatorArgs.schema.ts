import { z } from 'zod'
import { TranslatorSelectObjectSchema } from './TranslatorSelect.schema'
import { TranslatorIncludeObjectSchema } from './TranslatorInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TranslatorArgs> = z
  .object({
    select: z.lazy(() => TranslatorSelectObjectSchema).optional(),
    include: z.lazy(() => TranslatorIncludeObjectSchema).optional(),
  })
  .strict()

export const TranslatorArgsObjectSchema = Schema
