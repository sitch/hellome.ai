/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { AuthorWhereInputObjectSchema } from "./AuthorWhereInput.schema"

const Schema: z.ZodType<
  Omit<Prisma.AuthorRelationFilter, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    is: z
      .lazy(() => AuthorWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => AuthorWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const AuthorRelationFilterObjectSchema = Schema
