import { z } from 'zod'
import { EditionSelectObjectSchema } from './EditionSelect.schema'
import { EditionIncludeObjectSchema } from './EditionInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EditionArgs> = z
  .object({
    select: z.lazy(() => EditionSelectObjectSchema).optional(),
    include: z.lazy(() => EditionIncludeObjectSchema).optional(),
  })
  .strict()

export const EditionArgsObjectSchema = Schema
