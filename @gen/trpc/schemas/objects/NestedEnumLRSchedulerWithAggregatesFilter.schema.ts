import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { LRSchedulerSchema } from "../enums/LRScheduler.schema"
import { NestedEnumLRSchedulerFilterObjectSchema } from "./NestedEnumLRSchedulerFilter.schema"
import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema"

const Schema: z.ZodType<Prisma.NestedEnumLRSchedulerWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => LRSchedulerSchema).optional(),
    in: z
      .lazy(() => LRSchedulerSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => LRSchedulerSchema)
      .array()
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
