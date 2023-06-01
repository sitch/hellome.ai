/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<
  Omit<
    Prisma.UserMinAggregateInputType,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    name: z.literal(true).optional(),
    email: z.literal(true).optional(),
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    deletedAt: z.literal(true).optional(),
  })
  .strict()

export const UserMinAggregateInputObjectSchema = Schema
