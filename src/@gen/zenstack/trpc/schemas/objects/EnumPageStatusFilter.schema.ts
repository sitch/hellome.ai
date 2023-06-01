/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageStatusSchema } from "../enums/PageStatus.schema"
import { NestedEnumPageStatusFilterObjectSchema } from "./NestedEnumPageStatusFilter.schema"

const Schema: z.ZodType<
  Omit<Prisma.EnumPageStatusFilter, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    equals: z.lazy(() => PageStatusSchema).optional(),
    in: z
      .union([
        z.lazy(() => PageStatusSchema).array(),
        z.lazy(() => PageStatusSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => PageStatusSchema).array(),
        z.lazy(() => PageStatusSchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => PageStatusSchema),
        z.lazy(() => NestedEnumPageStatusFilterObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const EnumPageStatusFilterObjectSchema = Schema
