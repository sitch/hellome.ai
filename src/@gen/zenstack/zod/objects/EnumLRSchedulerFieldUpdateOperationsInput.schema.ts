/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { LRSchedulerSchema } from "../enums/LRScheduler.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.EnumLRSchedulerFieldUpdateOperationsInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    set: z.lazy(() => LRSchedulerSchema).optional(),
  })
  .strict()

export const EnumLRSchedulerFieldUpdateOperationsInputObjectSchema = Schema
