import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextCreateNestedManyWithoutTranslatorInputObjectSchema } from "./PageTextCreateNestedManyWithoutTranslatorInput.schema"

const Schema: z.ZodType<Prisma.TranslatorCreateInput> = z
  .object({
    id: z.string().optional(),
    pageTexts: z
      .lazy(() => PageTextCreateNestedManyWithoutTranslatorInputObjectSchema)
      .optional(),
  })
  .strict()

export const TranslatorCreateInputObjectSchema = Schema
