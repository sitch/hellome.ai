import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ArtistCountOutputTypeSelect> = z
  .object({
    stories: z.boolean().optional(),
    pageArtworks: z.boolean().optional(),
  })
  .strict()

export const ArtistCountOutputTypeSelectObjectSchema = Schema
