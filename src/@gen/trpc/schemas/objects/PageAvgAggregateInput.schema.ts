import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.PageAvgAggregateInputType> = z
  .object({
    pageNumber: z.literal(true).optional(),
  })
  .strict()

export const PageAvgAggregateInputObjectSchema = Schema
