/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkWhereInputObjectSchema } from "./PageArtworkWhereInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageArtworkListRelationFilter,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    every: z.lazy(() => PageArtworkWhereInputObjectSchema).optional(),
    some: z.lazy(() => PageArtworkWhereInputObjectSchema).optional(),
    none: z.lazy(() => PageArtworkWhereInputObjectSchema).optional(),
  })
  .strict()

export const PageArtworkListRelationFilterObjectSchema = Schema
