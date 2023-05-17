import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.CloudFileCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    filename: z.literal(true).optional(),
    stem: z.literal(true).optional(),
    extension: z.literal(true).optional(),
    size: z.literal(true).optional(),
    mime: z.literal(true).optional(),
    resourceType: z.literal(true).optional(),
    metadata: z.literal(true).optional(),
    key: z.literal(true).optional(),
    bucket: z.literal(true).optional(),
    region: z.literal(true).optional(),
    publicUrl: z.literal(true).optional(),
    privacy: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const CloudFileCountAggregateInputObjectSchema = Schema
