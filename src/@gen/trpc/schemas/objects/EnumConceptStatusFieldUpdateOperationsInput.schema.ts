import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptStatusSchema } from "../enums/ConceptStatus.schema"

const Schema: z.ZodType<Prisma.EnumConceptStatusFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => ConceptStatusSchema).optional(),
  })
  .strict()

export const EnumConceptStatusFieldUpdateOperationsInputObjectSchema = Schema
