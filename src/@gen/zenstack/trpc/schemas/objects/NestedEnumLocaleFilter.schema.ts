/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { LocaleSchema } from "../enums/Locale.schema"

const Schema: z.ZodType<
  Omit<Prisma.NestedEnumLocaleFilter, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    equals: z.lazy(() => LocaleSchema).optional(),
    in: z
      .union([z.lazy(() => LocaleSchema).array(), z.lazy(() => LocaleSchema)])
      .optional(),
    notIn: z
      .union([z.lazy(() => LocaleSchema).array(), z.lazy(() => LocaleSchema)])
      .optional(),
    not: z
      .union([
        z.lazy(() => LocaleSchema),
        z.lazy(() => NestedEnumLocaleFilterObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const NestedEnumLocaleFilterObjectSchema = Schema
