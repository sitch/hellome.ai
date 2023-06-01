/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { NestedBoolFilterObjectSchema } from "./NestedBoolFilter.schema"

const Schema: z.ZodType<
  Omit<Prisma.BoolFilter, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    equals: z.boolean().optional(),
    not: z
      .union([z.boolean(), z.lazy(() => NestedBoolFilterObjectSchema)])
      .optional(),
  })
  .strict()

export const BoolFilterObjectSchema = Schema
