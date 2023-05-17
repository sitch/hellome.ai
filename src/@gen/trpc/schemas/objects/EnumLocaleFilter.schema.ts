import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { LocaleSchema } from "../enums/Locale.schema"
import { NestedEnumLocaleFilterObjectSchema } from "./NestedEnumLocaleFilter.schema"

const Schema: z.ZodType<Prisma.EnumLocaleFilter> = z
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

export const EnumLocaleFilterObjectSchema = Schema
