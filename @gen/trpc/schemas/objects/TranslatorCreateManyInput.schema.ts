import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.TranslatorCreateManyInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict()

export const TranslatorCreateManyInputObjectSchema = Schema
