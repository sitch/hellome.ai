/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StoryWhereInputObjectSchema } from "./StoryWhereInput.schema"

const Schema: z.ZodType<
  Omit<Prisma.StoryRelationFilter, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    is: z.lazy(() => StoryWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => StoryWhereInputObjectSchema).optional(),
  })
  .strict()

export const StoryRelationFilterObjectSchema = Schema
