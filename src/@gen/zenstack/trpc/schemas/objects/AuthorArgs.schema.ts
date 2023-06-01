/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { AuthorIncludeObjectSchema } from "./AuthorInclude.schema"
import { AuthorSelectObjectSchema } from "./AuthorSelect.schema"

const Schema: z.ZodType<
  Omit<Prisma.AuthorArgs, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    select: z.lazy(() => AuthorSelectObjectSchema).optional(),
    include: z.lazy(() => AuthorIncludeObjectSchema).optional(),
  })
  .strict()

export const AuthorArgsObjectSchema = Schema
