import { PhotoFindManySchema } from '../findManyPhoto.schema'
import { ConceptCountOutputTypeArgsObjectSchema } from './ConceptCountOutputTypeArgs.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

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
