import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.PhotoCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    height: z.literal(true).optional(),
    width: z.literal(true).optional(),
    tags: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    fileId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const PhotoCountAggregateInputObjectSchema = Schema
