import { z } from 'zod'
import { UserArgsObjectSchema } from './UserArgs.schema'
import { PDFArgsObjectSchema } from './PDFArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EditionInclude> = z
  .object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    pdf: z.union([z.boolean(), z.lazy(() => PDFArgsObjectSchema)]).optional(),
  })
  .strict()

export const EditionIncludeObjectSchema = Schema
