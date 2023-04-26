import { PageTextIncludeObjectSchema } from './PageTextInclude.schema'
import { PageTextSelectObjectSchema } from './PageTextSelect.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PageTextArgs> = z
  .object({
    select: z.lazy(() => PageTextSelectObjectSchema).optional(),
    include: z.lazy(() => PageTextIncludeObjectSchema).optional(),
  })
  .strict()

export const PageTextArgsObjectSchema = Schema
