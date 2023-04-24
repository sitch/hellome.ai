import { z } from 'zod'
import { PageIncludeObjectSchema } from './PageInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageArgs> = z
  .object({
    include: z.lazy(() => PageIncludeObjectSchema).optional(),
  })
  .strict()

export const PageArgsObjectSchema = Schema
