import { z } from 'zod'
import { ConceptSelectObjectSchema } from './ConceptSelect.schema'
import { ConceptIncludeObjectSchema } from './ConceptInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ConceptArgs> = z
  .object({
    select: z.lazy(() => ConceptSelectObjectSchema).optional(),
    include: z.lazy(() => ConceptIncludeObjectSchema).optional(),
  })
  .strict()

export const ConceptArgsObjectSchema = Schema
