import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.StoryCountOutputTypeSelect> = z
  .object({
    pages: z.boolean().optional(),
    pageArtworks: z.boolean().optional(),
    pageTexts: z.boolean().optional(),
  })
  .strict()

export const StoryCountOutputTypeSelectObjectSchema = Schema
