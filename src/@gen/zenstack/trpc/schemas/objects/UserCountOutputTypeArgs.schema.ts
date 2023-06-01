/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { UserCountOutputTypeSelectObjectSchema } from "./UserCountOutputTypeSelect.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.UserCountOutputTypeArgs,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    select: z.lazy(() => UserCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const UserCountOutputTypeArgsObjectSchema = Schema
