/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { UserIncludeObjectSchema } from "./UserInclude.schema"
import { UserSelectObjectSchema } from "./UserSelect.schema"

const Schema: z.ZodType<
  Omit<Prisma.UserArgs, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    select: z.lazy(() => UserSelectObjectSchema).optional(),
    include: z.lazy(() => UserIncludeObjectSchema).optional(),
  })
  .strict()

export const UserArgsObjectSchema = Schema
