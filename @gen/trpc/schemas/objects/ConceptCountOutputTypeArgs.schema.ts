import { ConceptCountOutputTypeSelectObjectSchema } from './ConceptCountOutputTypeSelect.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.ConceptCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => ConceptCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const ConceptCountOutputTypeArgsObjectSchema = Schema
