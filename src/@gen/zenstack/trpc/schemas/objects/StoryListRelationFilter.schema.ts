/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StoryWhereInputObjectSchema } from "./StoryWhereInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.StoryListRelationFilter,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    every: z.lazy(() => StoryWhereInputObjectSchema).optional(),
    some: z.lazy(() => StoryWhereInputObjectSchema).optional(),
    none: z.lazy(() => StoryWhereInputObjectSchema).optional(),
  })
  .strict()

export const StoryListRelationFilterObjectSchema = Schema
