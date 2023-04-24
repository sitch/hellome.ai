import { z } from 'zod'
import { FilePrivacySchema } from '../enums/FilePrivacy.schema'
import { NestedEnumFilePrivacyWithAggregatesFilterObjectSchema } from './NestedEnumFilePrivacyWithAggregatesFilter.schema'
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema'
import { NestedEnumFilePrivacyFilterObjectSchema } from './NestedEnumFilePrivacyFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EnumFilePrivacyWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => FilePrivacySchema).optional(),
    in: z
      .lazy(() => FilePrivacySchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => FilePrivacySchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => FilePrivacySchema),
        z.lazy(() => NestedEnumFilePrivacyWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumFilePrivacyFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumFilePrivacyFilterObjectSchema).optional(),
  })
  .strict()

export const EnumFilePrivacyWithAggregatesFilterObjectSchema = Schema
