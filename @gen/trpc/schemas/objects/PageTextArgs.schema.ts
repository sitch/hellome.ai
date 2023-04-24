import { z } from 'zod'
import { PageTextIncludeObjectSchema } from './PageTextInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageTextArgs> = z
  .object({
    include: z.lazy(() => PageTextIncludeObjectSchema).optional(),
  })
  .strict()

export const PageTextArgsObjectSchema = Schema
