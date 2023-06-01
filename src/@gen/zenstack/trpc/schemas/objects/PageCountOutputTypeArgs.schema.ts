/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageCountOutputTypeSelectObjectSchema } from "./PageCountOutputTypeSelect.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageCountOutputTypeArgs,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    select: z.lazy(() => PageCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const PageCountOutputTypeArgsObjectSchema = Schema
