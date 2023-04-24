import { z } from 'zod'
import { LocaleSchema } from '../enums/Locale.schema'
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema'
import { NestedEnumLocaleFilterObjectSchema } from './NestedEnumLocaleFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.NestedEnumLocaleWithAggregatesFilter> = z
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
        z.lazy(() => NestedEnumLocaleWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumLocaleFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumLocaleFilterObjectSchema).optional(),
  })
  .strict()

export const NestedEnumLocaleWithAggregatesFilterObjectSchema = Schema
