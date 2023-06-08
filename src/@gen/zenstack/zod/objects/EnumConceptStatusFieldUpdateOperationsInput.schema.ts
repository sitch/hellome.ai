/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptStatusSchema } from "../enums/ConceptStatus.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.EnumConceptStatusFieldUpdateOperationsInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    set: z.lazy(() => ConceptStatusSchema).optional(),
  })
  .strict()

export const EnumConceptStatusFieldUpdateOperationsInputObjectSchema = Schema
