import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.PredictionMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    uuid: z.literal(true).optional(),
    status: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    started_at: z.literal(true).optional(),
    completed_at: z.literal(true).optional(),
    version: z.literal(true).optional(),
    error: z.literal(true).optional(),
    logs: z.literal(true).optional(),
  })
  .strict()

export const PredictionMaxAggregateInputObjectSchema = Schema
