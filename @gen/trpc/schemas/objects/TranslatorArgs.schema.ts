import { TranslatorIncludeObjectSchema } from './TranslatorInclude.schema'
import { TranslatorSelectObjectSchema } from './TranslatorSelect.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.TranslatorArgs> = z
  .object({
    select: z.lazy(() => TranslatorSelectObjectSchema).optional(),
    include: z.lazy(() => TranslatorIncludeObjectSchema).optional(),
  })
  .strict()

export const TranslatorArgsObjectSchema = Schema
