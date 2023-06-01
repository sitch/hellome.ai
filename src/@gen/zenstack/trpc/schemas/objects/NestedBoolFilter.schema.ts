/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<
  Omit<Prisma.NestedBoolFilter, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    equals: z.boolean().optional(),
    not: z
      .union([z.boolean(), z.lazy(() => NestedBoolFilterObjectSchema)])
      .optional(),
  })
  .strict()

export const NestedBoolFilterObjectSchema = Schema
