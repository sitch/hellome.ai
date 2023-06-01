/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<
  Omit<
    Prisma.PageMinAggregateInputType,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    status: z.literal(true).optional(),
    type: z.literal(true).optional(),
    pageNumber: z.literal(true).optional(),
    storyId: z.literal(true).optional(),
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    deletedAt: z.literal(true).optional(),
  })
  .strict()

export const PageMinAggregateInputObjectSchema = Schema
