import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PageCountOutputTypeSelect> = z
  .object({
    artworks: z.boolean().optional(),
    texts: z.boolean().optional(),
  })
  .strict()

export const PageCountOutputTypeSelectObjectSchema = Schema
