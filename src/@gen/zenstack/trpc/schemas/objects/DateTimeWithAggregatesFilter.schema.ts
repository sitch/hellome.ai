/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { NestedDateTimeFilterObjectSchema } from "./NestedDateTimeFilter.schema"
import { NestedDateTimeWithAggregatesFilterObjectSchema } from "./NestedDateTimeWithAggregatesFilter.schema"
import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.DateTimeWithAggregatesFilter,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    equals: z.union([z.date().optional(), z.string().datetime().optional()]),
    in: z
      .union([
        z.union([z.date().array(), z.string().datetime().array().optional()]),
        z.union([z.date(), z.string().datetime().optional()]),
      ])
      .optional(),
    notIn: z
      .union([
        z.union([z.date().array(), z.string().datetime().array().optional()]),
        z.union([z.date(), z.string().datetime().optional()]),
      ])
      .optional(),
    lt: z.union([z.date().optional(), z.string().datetime().optional()]),
    lte: z.union([z.date().optional(), z.string().datetime().optional()]),
    gt: z.union([z.date().optional(), z.string().datetime().optional()]),
    gte: z.union([z.date().optional(), z.string().datetime().optional()]),
    not: z
      .union([
        z.union([z.date(), z.string().datetime().optional()]),
        z.lazy(() => NestedDateTimeWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedDateTimeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedDateTimeFilterObjectSchema).optional(),
  })
  .strict()

export const DateTimeWithAggregatesFilterObjectSchema = Schema
