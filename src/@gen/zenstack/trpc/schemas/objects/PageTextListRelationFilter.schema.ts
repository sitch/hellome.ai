/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextWhereInputObjectSchema } from "./PageTextWhereInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageTextListRelationFilter,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    every: z.lazy(() => PageTextWhereInputObjectSchema).optional(),
    some: z.lazy(() => PageTextWhereInputObjectSchema).optional(),
    none: z.lazy(() => PageTextWhereInputObjectSchema).optional(),
  })
  .strict()

export const PageTextListRelationFilterObjectSchema = Schema
