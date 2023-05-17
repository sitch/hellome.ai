import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.ArtistCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const ArtistCountAggregateInputObjectSchema = Schema
