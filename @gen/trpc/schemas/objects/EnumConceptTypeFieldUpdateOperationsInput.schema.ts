import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptTypeSchema } from "../enums/ConceptType.schema"

const Schema: z.ZodType<Prisma.EnumConceptTypeFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => ConceptTypeSchema).optional(),
  })
  .strict()

export const EnumConceptTypeFieldUpdateOperationsInputObjectSchema = Schema
