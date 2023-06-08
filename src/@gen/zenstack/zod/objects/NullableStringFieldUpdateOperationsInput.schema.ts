/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<
  Omit<
    Prisma.NullableStringFieldUpdateOperationsInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    set: z.string().optional().nullable(),
  })
  .strict()

export const NullableStringFieldUpdateOperationsInputObjectSchema = Schema
