import { PhotoFindManySchema } from '../findManyPhoto.schema'
import { ConceptCountOutputTypeArgsObjectSchema } from './ConceptCountOutputTypeArgs.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.ConceptSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    type: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
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

export const ConceptSelectObjectSchema = Schema
