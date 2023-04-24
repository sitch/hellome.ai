import { z } from 'zod'
import { EditionFindManySchema } from '../findManyEdition.schema'
import { ConceptArgsObjectSchema } from './ConceptArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserInclude> = z
  .object({
    Edition: z
      .union([z.boolean(), z.lazy(() => EditionFindManySchema)])
      .optional(),
    Concept: z
      .union([z.boolean(), z.lazy(() => ConceptArgsObjectSchema)])
      .optional(),
    _count: z.boolean().optional(),
  })
  .strict()

export const UserIncludeObjectSchema = Schema
