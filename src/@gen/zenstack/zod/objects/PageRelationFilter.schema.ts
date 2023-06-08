/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageWhereInputObjectSchema } from "./PageWhereInput.schema"

const Schema: z.ZodType<
  Omit<Prisma.PageRelationFilter, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    is: z.lazy(() => PageWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => PageWhereInputObjectSchema).optional(),
  })
  .strict()

export const PageRelationFilterObjectSchema = Schema
