import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.TranslatorMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
  })
  .strict()

export const TranslatorMinAggregateInputObjectSchema = Schema
