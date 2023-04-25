import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ConceptCountOutputTypeSelect> = z
  .object({
    photos: z.boolean().optional(),
  })
  .strict()

export const ConceptCountOutputTypeSelectObjectSchema = Schema
