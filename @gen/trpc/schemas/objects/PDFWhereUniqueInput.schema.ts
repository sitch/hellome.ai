import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PDFWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    fileId: z.string().optional(),
  })
  .strict()

export const PDFWhereUniqueInputObjectSchema = Schema
