import { z } from 'zod'
import { ConceptTypeSchema } from '../enums/ConceptType.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ConceptCreateWithoutPhotosInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    type: z.lazy(() => ConceptTypeSchema),
    description: z.string().optional().nullable(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict()

export const ConceptCreateWithoutPhotosInputObjectSchema = Schema
