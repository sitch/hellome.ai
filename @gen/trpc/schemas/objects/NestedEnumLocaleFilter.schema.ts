import { z } from 'zod'
import { LocaleSchema } from '../enums/Locale.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.NestedEnumLocaleFilter> = z
  .object({
    equals: z.lazy(() => LocaleSchema).optional(),
    in: z
      .lazy(() => LocaleSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => LocaleSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => LocaleSchema),
        z.lazy(() => NestedEnumLocaleFilterObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const NestedEnumLocaleFilterObjectSchema = Schema
