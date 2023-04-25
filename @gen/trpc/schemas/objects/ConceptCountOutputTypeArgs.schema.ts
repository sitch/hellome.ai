import { z } from 'zod'
import { ConceptCountOutputTypeSelectObjectSchema } from './ConceptCountOutputTypeSelect.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ConceptCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => ConceptCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const ConceptCountOutputTypeArgsObjectSchema = Schema
