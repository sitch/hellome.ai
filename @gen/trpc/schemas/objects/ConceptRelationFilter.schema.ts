import { z } from 'zod'
import { ConceptWhereInputObjectSchema } from './ConceptWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ConceptRelationFilter> = z
  .object({
    is: z
      .lazy(() => ConceptWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ConceptWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const ConceptRelationFilterObjectSchema = Schema
