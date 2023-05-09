import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { FilePrivacySchema } from "../enums/FilePrivacy.schema"
import { NestedEnumFilePrivacyFilterObjectSchema } from "./NestedEnumFilePrivacyFilter.schema"
import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema"

const Schema: z.ZodType<Prisma.NestedEnumFilePrivacyWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => FilePrivacySchema).optional(),
    in: z
      .union([
        z.lazy(() => FilePrivacySchema).array(),
        z.lazy(() => FilePrivacySchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => FilePrivacySchema).array(),
        z.lazy(() => FilePrivacySchema),
      ])
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

export const NestedEnumFilePrivacyWithAggregatesFilterObjectSchema = Schema
