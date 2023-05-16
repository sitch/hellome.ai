import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { FilePrivacySchema } from "../enums/FilePrivacy.schema"
import { NestedEnumFilePrivacyFilterObjectSchema } from "./NestedEnumFilePrivacyFilter.schema"

const Schema: z.ZodType<Prisma.EnumFilePrivacyFilter> = z
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
        z.lazy(() => NestedEnumFilePrivacyFilterObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const EnumFilePrivacyFilterObjectSchema = Schema
