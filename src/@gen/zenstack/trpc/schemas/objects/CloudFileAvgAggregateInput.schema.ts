/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<
  Omit<
    Prisma.CloudFileAvgAggregateInputType,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    size: z.literal(true).optional(),
  })
  .strict()

export const CloudFileAvgAggregateInputObjectSchema = Schema
