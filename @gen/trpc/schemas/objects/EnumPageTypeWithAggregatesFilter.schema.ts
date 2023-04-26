import { PageTypeSchema } from '../enums/PageType.schema'
import { NestedEnumPageTypeFilterObjectSchema } from './NestedEnumPageTypeFilter.schema'
import { NestedEnumPageTypeWithAggregatesFilterObjectSchema } from './NestedEnumPageTypeWithAggregatesFilter.schema'
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.EnumPageTypeWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => PageTypeSchema).optional(),
    in: z
      .lazy(() => PageTypeSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => PageTypeSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => PageTypeSchema),
        z.lazy(() => NestedEnumPageTypeWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumPageTypeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumPageTypeFilterObjectSchema).optional(),
  })
  .strict()

export const EnumPageTypeWithAggregatesFilterObjectSchema = Schema
