import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.StringNullableListFilter> = z
  .object({
    equals: z.string().array().optional().nullable(),
    has: z.string().optional().nullable(),
    hasEvery: z.string().array().optional(),
    hasSome: z.string().array().optional(),
    isEmpty: z.boolean().optional(),
  })
  .strict()

export const StringNullableListFilterObjectSchema = Schema
