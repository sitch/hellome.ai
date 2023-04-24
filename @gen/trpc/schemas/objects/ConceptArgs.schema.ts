import { z } from 'zod'
import { ConceptIncludeObjectSchema } from './ConceptInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ConceptArgs> = z
  .object({
    include: z.lazy(() => ConceptIncludeObjectSchema).optional(),
  })
  .strict()

export const ConceptArgsObjectSchema = Schema
