import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { LRSchedulerSchema } from "../enums/LRScheduler.schema"
import { NestedEnumLRSchedulerFilterObjectSchema } from "./NestedEnumLRSchedulerFilter.schema"

const Schema: z.ZodType<Prisma.EnumLRSchedulerFilter> = z
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
        z.lazy(() => NestedEnumLRSchedulerFilterObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const EnumLRSchedulerFilterObjectSchema = Schema
