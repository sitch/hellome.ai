/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { UserWhereInputObjectSchema } from "./UserWhereInput.schema"

const Schema: z.ZodType<
  Omit<Prisma.UserRelationFilter, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    is: z.lazy(() => UserWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => UserWhereInputObjectSchema).optional(),
  })
  .strict()

export const UserRelationFilterObjectSchema = Schema
