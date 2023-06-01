/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextTypeSchema } from "../enums/PageTextType.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.EnumPageTextTypeFieldUpdateOperationsInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    set: z.lazy(() => PageTextTypeSchema).optional(),
  })
  .strict()

export const EnumPageTextTypeFieldUpdateOperationsInputObjectSchema = Schema
