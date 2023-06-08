/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<
  Omit<
    Prisma.DreamBoothTrainingCountOutputTypeSelect,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    Concept: z.boolean().optional(),
  })
  .strict()

export const DreamBoothTrainingCountOutputTypeSelectObjectSchema = Schema
