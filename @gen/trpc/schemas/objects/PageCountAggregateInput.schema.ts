import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.PageCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    status: z.literal(true).optional(),
    type: z.literal(true).optional(),
    pageNumber: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    storyId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const PageCountAggregateInputObjectSchema = Schema
