import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.TranslatorCountOutputTypeSelect> = z
  .object({
    pageTexts: z.boolean().optional(),
  })
  .strict()

export const TranslatorCountOutputTypeSelectObjectSchema = Schema
