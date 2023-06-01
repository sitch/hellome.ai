/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextIncludeObjectSchema } from "./PageTextInclude.schema"
import { PageTextSelectObjectSchema } from "./PageTextSelect.schema"

const Schema: z.ZodType<
  Omit<Prisma.PageTextArgs, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    select: z.lazy(() => PageTextSelectObjectSchema).optional(),
    include: z.lazy(() => PageTextIncludeObjectSchema).optional(),
  })
  .strict()

export const PageTextArgsObjectSchema = Schema
