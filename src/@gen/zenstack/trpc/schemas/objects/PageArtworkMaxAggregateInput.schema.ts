/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<
  Omit<
    Prisma.PageArtworkMaxAggregateInputType,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    status: z.literal(true).optional(),
    pageId: z.literal(true).optional(),
    storyId: z.literal(true).optional(),
    artistId: z.literal(true).optional(),
    photoId: z.literal(true).optional(),
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    deletedAt: z.literal(true).optional(),
  })
  .strict()

export const PageArtworkMaxAggregateInputObjectSchema = Schema
