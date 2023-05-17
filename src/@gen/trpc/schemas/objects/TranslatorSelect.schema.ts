import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextFindManySchema } from "../findManyPageText.schema"
import { TranslatorCountOutputTypeArgsObjectSchema } from "./TranslatorCountOutputTypeArgs.schema"

const Schema: z.ZodType<Prisma.TranslatorSelect> = z
  .object({
    id: z.boolean().optional(),
    pageTexts: z
      .union([z.boolean(), z.lazy(() => PageTextFindManySchema)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => TranslatorCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const TranslatorSelectObjectSchema = Schema
