/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptWhereInputObjectSchema } from "./ConceptWhereInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.ConceptListRelationFilter,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    every: z.lazy(() => ConceptWhereInputObjectSchema).optional(),
    some: z.lazy(() => ConceptWhereInputObjectSchema).optional(),
    none: z.lazy(() => ConceptWhereInputObjectSchema).optional(),
  })
  .strict()

export const ConceptListRelationFilterObjectSchema = Schema
