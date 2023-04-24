import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PDFWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    fileId: z.string().optional(),
  })
  .strict()

export const PDFWhereUniqueInputObjectSchema = Schema
