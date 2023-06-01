/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageStatusSchema } from "../enums/PageStatus.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.EnumPageStatusFieldUpdateOperationsInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    set: z.lazy(() => PageStatusSchema).optional(),
  })
  .strict()

export const EnumPageStatusFieldUpdateOperationsInputObjectSchema = Schema
