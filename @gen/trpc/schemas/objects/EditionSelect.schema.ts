import { z } from 'zod'
import { UserArgsObjectSchema } from './UserArgs.schema'
import { PDFArgsObjectSchema } from './PDFArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EditionSelect> = z
  .object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    userId: z.boolean().optional(),
    pdfId: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    pdf: z.union([z.boolean(), z.lazy(() => PDFArgsObjectSchema)]).optional(),
  })
  .strict()

export const EditionSelectObjectSchema = Schema
