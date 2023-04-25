import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageCountOutputTypeSelect> = z
  .object({
    artworks: z.boolean().optional(),
    texts: z.boolean().optional(),
  })
  .strict()

export const PageCountOutputTypeSelectObjectSchema = Schema
