import { z } from 'zod'
import { EditionIncludeObjectSchema } from './EditionInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EditionArgs> = z
  .object({
    include: z.lazy(() => EditionIncludeObjectSchema).optional(),
  })
  .strict()

export const EditionArgsObjectSchema = Schema
