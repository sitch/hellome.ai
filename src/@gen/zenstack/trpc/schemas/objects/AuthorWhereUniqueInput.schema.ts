/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<
  Omit<Prisma.AuthorWhereUniqueInput, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    userId: z.string().optional(),
    id: z.string().optional(),
  })
  .strict()

export const AuthorWhereUniqueInputObjectSchema = Schema
