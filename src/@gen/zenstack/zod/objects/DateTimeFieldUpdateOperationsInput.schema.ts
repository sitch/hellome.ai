/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<
  Omit<
    Prisma.DateTimeFieldUpdateOperationsInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    set: z.union([z.date().optional(), z.string().datetime().optional()]),
  })
  .strict()

export const DateTimeFieldUpdateOperationsInputObjectSchema = Schema
