import { z } from 'zod'
import { PageSelectObjectSchema } from './PageSelect.schema'
import { PageIncludeObjectSchema } from './PageInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageArgs> = z
  .object({
    select: z.lazy(() => PageSelectObjectSchema).optional(),
    include: z.lazy(() => PageIncludeObjectSchema).optional(),
  })
  .strict()

export const PageArgsObjectSchema = Schema
