/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<
  Omit<
    Prisma.ConceptCountOutputTypeSelect,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    photos: z.boolean().optional(),
  })
  .strict()

export const ConceptCountOutputTypeSelectObjectSchema = Schema
