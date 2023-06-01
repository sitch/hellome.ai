/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<
  Omit<
    Prisma.EditionMaxAggregateInputType,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    userId: z.literal(true).optional(),
    pdfId: z.literal(true).optional(),
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    deletedAt: z.literal(true).optional(),
  })
  .strict()

export const EditionMaxAggregateInputObjectSchema = Schema
