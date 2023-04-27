import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextUncheckedCreateNestedManyWithoutTranslatorInputObjectSchema } from "./PageTextUncheckedCreateNestedManyWithoutTranslatorInput.schema"

const Schema: z.ZodType<Prisma.TranslatorUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    pageTexts: z
      .lazy(
        () =>
          PageTextUncheckedCreateNestedManyWithoutTranslatorInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const TranslatorUncheckedCreateInputObjectSchema = Schema
