import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PhotoCountOutputTypeSelect> = z
  .object({
    pageArtworks: z.boolean().optional(),
    concepts: z.boolean().optional(),
  })
  .strict()

export const PhotoCountOutputTypeSelectObjectSchema = Schema
