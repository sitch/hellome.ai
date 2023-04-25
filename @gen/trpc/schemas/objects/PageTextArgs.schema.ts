import { z } from 'zod'
import { PageTextSelectObjectSchema } from './PageTextSelect.schema'
import { PageTextIncludeObjectSchema } from './PageTextInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageTextArgs> = z
  .object({
    select: z.lazy(() => PageTextSelectObjectSchema).optional(),
    include: z.lazy(() => PageTextIncludeObjectSchema).optional(),
  })
  .strict()

export const PageTextArgsObjectSchema = Schema
