import { z } from 'zod'
import { PhotoFindManySchema } from '../findManyPhoto.schema'
import { ConceptCountOutputTypeArgsObjectSchema } from './ConceptCountOutputTypeArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ConceptInclude> = z
  .object({
    photos: z
      .union([z.boolean(), z.lazy(() => PhotoFindManySchema)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => ConceptCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const ConceptIncludeObjectSchema = Schema
