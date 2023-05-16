import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { LRSchedulerSchema } from "../enums/LRScheduler.schema"
import { NestedEnumLRSchedulerFilterObjectSchema } from "./NestedEnumLRSchedulerFilter.schema"

const Schema: z.ZodType<Prisma.EnumLRSchedulerFilter> = z
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
        z.lazy(() => NestedEnumLRSchedulerFilterObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const EnumLRSchedulerFilterObjectSchema = Schema
