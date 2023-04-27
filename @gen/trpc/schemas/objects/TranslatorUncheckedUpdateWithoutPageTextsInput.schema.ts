import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"

const Schema: z.ZodType<Prisma.TranslatorUncheckedUpdateWithoutPageTextsInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
    })
    .strict()

export const TranslatorUncheckedUpdateWithoutPageTextsInputObjectSchema = Schema
