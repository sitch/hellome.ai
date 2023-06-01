/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { FilePrivacySchema } from "../enums/FilePrivacy.schema"
import { NestedEnumFilePrivacyFilterObjectSchema } from "./NestedEnumFilePrivacyFilter.schema"

const Schema: z.ZodType<
  Omit<Prisma.EnumFilePrivacyFilter, "zenstack_transaction" | "zenstack_guard">
> = z
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
