/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageWhereInputObjectSchema } from "./PageWhereInput.schema"

const Schema: z.ZodType<
  Omit<Prisma.PageListRelationFilter, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    every: z.lazy(() => PageWhereInputObjectSchema).optional(),
    some: z.lazy(() => PageWhereInputObjectSchema).optional(),
    none: z.lazy(() => PageWhereInputObjectSchema).optional(),
  })
  .strict()

export const PageListRelationFilterObjectSchema = Schema
