import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorCountOutputTypeSelect> = z
  .object({
    stories: z.boolean().optional(),
    pageTexts: z.boolean().optional(),
  })
  .strict()

export const AuthorCountOutputTypeSelectObjectSchema = Schema
