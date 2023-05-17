import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextUpdateManyWithoutTranslatorNestedInputObjectSchema } from "./PageTextUpdateManyWithoutTranslatorNestedInput.schema"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"

const Schema: z.ZodType<Prisma.TranslatorUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    pageTexts: z
      .lazy(() => PageTextUpdateManyWithoutTranslatorNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const TranslatorUpdateInputObjectSchema = Schema
