/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptTypeSchema } from "../enums/ConceptType.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.EnumConceptTypeFieldUpdateOperationsInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    set: z.lazy(() => ConceptTypeSchema).optional(),
  })
  .strict()

export const EnumConceptTypeFieldUpdateOperationsInputObjectSchema = Schema
