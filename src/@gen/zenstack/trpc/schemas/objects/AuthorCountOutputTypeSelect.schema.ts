/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<
  Omit<
    Prisma.AuthorCountOutputTypeSelect,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    stories: z.boolean().optional(),
    pageTexts: z.boolean().optional(),
  })
  .strict()

export const AuthorCountOutputTypeSelectObjectSchema = Schema
