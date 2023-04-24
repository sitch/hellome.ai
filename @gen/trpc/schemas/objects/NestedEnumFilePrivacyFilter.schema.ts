import { z } from 'zod'
import { FilePrivacySchema } from '../enums/FilePrivacy.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.NestedEnumFilePrivacyFilter> = z
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
        z.lazy(() => NestedEnumFilePrivacyFilterObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const NestedEnumFilePrivacyFilterObjectSchema = Schema
