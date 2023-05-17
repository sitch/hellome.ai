import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { LRSchedulerSchema } from "../enums/LRScheduler.schema"

const Schema: z.ZodType<Prisma.EnumLRSchedulerFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => LRSchedulerSchema).optional(),
  })
  .strict()

export const EnumLRSchedulerFieldUpdateOperationsInputObjectSchema = Schema
