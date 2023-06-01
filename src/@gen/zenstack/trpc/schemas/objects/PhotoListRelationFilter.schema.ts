/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PhotoWhereInputObjectSchema } from "./PhotoWhereInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PhotoListRelationFilter,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    every: z.lazy(() => PhotoWhereInputObjectSchema).optional(),
    some: z.lazy(() => PhotoWhereInputObjectSchema).optional(),
    none: z.lazy(() => PhotoWhereInputObjectSchema).optional(),
  })
  .strict()

export const PhotoListRelationFilterObjectSchema = Schema
