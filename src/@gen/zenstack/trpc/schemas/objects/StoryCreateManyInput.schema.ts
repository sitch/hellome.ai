/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<
  Omit<Prisma.StoryCreateManyInput, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    artistId: z.string().optional().nullable(),
    authorId: z.string().optional().nullable(),
    id: z.string().optional(),
    createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    deletedAt: z
      .union([z.date().optional(), z.string().datetime().optional()])
      .nullable(),
  })
  .strict()

export const StoryCreateManyInputObjectSchema = Schema
