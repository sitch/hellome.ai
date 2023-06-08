/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<
  Omit<
    Prisma.PredictionCountAggregateInputType,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    id: z.literal(true).optional(),
    uuid: z.literal(true).optional(),
    input: z.literal(true).optional(),
    output: z.literal(true).optional(),
    status: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    started_at: z.literal(true).optional(),
    completed_at: z.literal(true).optional(),
    version: z.literal(true).optional(),
    metrics: z.literal(true).optional(),
    error: z.literal(true).optional(),
    logs: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const PredictionCountAggregateInputObjectSchema = Schema
