import { z } from 'zod'
import { PageTextFindManySchema } from '../findManyPageText.schema'
import { TranslatorCountOutputTypeArgsObjectSchema } from './TranslatorCountOutputTypeArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TranslatorInclude> = z
  .object({
    pageTexts: z
      .union([z.boolean(), z.lazy(() => PageTextFindManySchema)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => TranslatorCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const TranslatorIncludeObjectSchema = Schema
