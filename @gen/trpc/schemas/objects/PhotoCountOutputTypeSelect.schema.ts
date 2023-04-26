import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PhotoCountOutputTypeSelect> = z
  .object({
    pageArtworks: z.boolean().optional(),
    concepts: z.boolean().optional(),
  })
  .strict()

export const PhotoCountOutputTypeSelectObjectSchema = Schema
