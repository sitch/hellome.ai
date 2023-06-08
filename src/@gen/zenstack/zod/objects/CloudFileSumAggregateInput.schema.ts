/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<
  Omit<
    Prisma.CloudFileSumAggregateInputType,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    size: z.literal(true).optional(),
  })
  .strict()

export const CloudFileSumAggregateInputObjectSchema = Schema
