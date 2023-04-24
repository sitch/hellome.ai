import { z } from 'zod'
import { PageTypeSchema } from '../enums/PageType.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.NestedEnumPageTypeFilter> = z
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
        z.lazy(() => NestedEnumPageTypeFilterObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const NestedEnumPageTypeFilterObjectSchema = Schema