/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { EditionWhereInputObjectSchema } from "./EditionWhereInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.EditionListRelationFilter,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    every: z.lazy(() => EditionWhereInputObjectSchema).optional(),
    some: z.lazy(() => EditionWhereInputObjectSchema).optional(),
    none: z.lazy(() => EditionWhereInputObjectSchema).optional(),
  })
  .strict()

export const EditionListRelationFilterObjectSchema = Schema
