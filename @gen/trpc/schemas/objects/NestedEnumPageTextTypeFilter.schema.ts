import { PageTextTypeSchema } from '../enums/PageTextType.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.NestedEnumPageTextTypeFilter> = z
  .object({
    equals: z.lazy(() => PageTextTypeSchema).optional(),
    in: z
      .lazy(() => PageTextTypeSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => PageTextTypeSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => PageTextTypeSchema),
        z.lazy(() => NestedEnumPageTextTypeFilterObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const NestedEnumPageTextTypeFilterObjectSchema = Schema
