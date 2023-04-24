import { z } from 'zod'
import { FileResourceTypeSchema } from '../enums/FileResourceType.schema'
import { NestedEnumFileResourceTypeWithAggregatesFilterObjectSchema } from './NestedEnumFileResourceTypeWithAggregatesFilter.schema'
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema'
import { NestedEnumFileResourceTypeFilterObjectSchema } from './NestedEnumFileResourceTypeFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EnumFileResourceTypeWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => FileResourceTypeSchema).optional(),
    in: z
      .lazy(() => FileResourceTypeSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => FileResourceTypeSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => FileResourceTypeSchema),
        z.lazy(
          () => NestedEnumFileResourceTypeWithAggregatesFilterObjectSchema
        ),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumFileResourceTypeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumFileResourceTypeFilterObjectSchema).optional(),
  })
  .strict()

export const EnumFileResourceTypeWithAggregatesFilterObjectSchema = Schema
