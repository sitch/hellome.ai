import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.CloudFileSumAggregateInputType> = z
  .object({
    size: z.literal(true).optional(),
  })
  .strict()

export const CloudFileSumAggregateInputObjectSchema = Schema
