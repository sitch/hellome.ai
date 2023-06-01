/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { EditionIncludeObjectSchema } from "./EditionInclude.schema"
import { EditionSelectObjectSchema } from "./EditionSelect.schema"

const Schema: z.ZodType<
  Omit<Prisma.EditionArgs, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    select: z.lazy(() => EditionSelectObjectSchema).optional(),
    include: z.lazy(() => EditionIncludeObjectSchema).optional(),
  })
  .strict()

export const EditionArgsObjectSchema = Schema
