import { z } from 'zod'
import { ConceptTypeSchema } from '../enums/ConceptType.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EnumConceptTypeFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => ConceptTypeSchema).optional(),
  })
  .strict()

export const EnumConceptTypeFieldUpdateOperationsInputObjectSchema = Schema
