import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EditionWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    userId: z.string().optional(),
    pdfId: z.string().optional(),
  })
  .strict()

export const EditionWhereUniqueInputObjectSchema = Schema
