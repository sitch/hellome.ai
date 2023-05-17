import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { LocaleSchema } from "../enums/Locale.schema"

const Schema: z.ZodType<Prisma.EnumLocaleFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => LocaleSchema).optional(),
  })
  .strict()

export const EnumLocaleFieldUpdateOperationsInputObjectSchema = Schema
