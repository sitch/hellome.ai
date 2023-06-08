/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { LRSchedulerSchema } from "../enums/LRScheduler.schema"
import { NestedEnumLRSchedulerFilterObjectSchema } from "./NestedEnumLRSchedulerFilter.schema"
import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.NestedEnumLRSchedulerWithAggregatesFilter,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    equals: z.lazy(() => LRSchedulerSchema).optional(),
    in: z
      .union([
        z.lazy(() => LRSchedulerSchema).array(),
        z.lazy(() => LRSchedulerSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => LRSchedulerSchema).array(),
        z.lazy(() => LRSchedulerSchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => LRSchedulerSchema),
        z.lazy(() => NestedEnumLRSchedulerWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumLRSchedulerFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumLRSchedulerFilterObjectSchema).optional(),
  })
  .strict()

export const NestedEnumLRSchedulerWithAggregatesFilterObjectSchema = Schema
