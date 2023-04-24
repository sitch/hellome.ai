import { z } from 'zod'
import { TranslatorWhereInputObjectSchema } from './TranslatorWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TranslatorRelationFilter> = z
  .object({
    is: z
      .lazy(() => TranslatorWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => TranslatorWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const TranslatorRelationFilterObjectSchema = Schema
