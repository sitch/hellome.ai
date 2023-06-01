/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PDFArgsObjectSchema } from "./PDFArgs.schema"
import { UserArgsObjectSchema } from "./UserArgs.schema"

const Schema: z.ZodType<
  Omit<Prisma.EditionInclude, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    pdf: z.union([z.boolean(), z.lazy(() => PDFArgsObjectSchema)]).optional(),
  })
  .strict()

export const EditionIncludeObjectSchema = Schema
