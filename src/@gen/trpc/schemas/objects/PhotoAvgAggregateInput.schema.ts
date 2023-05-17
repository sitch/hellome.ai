import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.PhotoAvgAggregateInputType> = z
  .object({
    height: z.literal(true).optional(),
    width: z.literal(true).optional(),
  })
  .strict()

export const PhotoAvgAggregateInputObjectSchema = Schema
