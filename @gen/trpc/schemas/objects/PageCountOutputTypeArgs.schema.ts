import { z } from 'zod'
import { PageCountOutputTypeSelectObjectSchema } from './PageCountOutputTypeSelect.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => PageCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const PageCountOutputTypeArgsObjectSchema = Schema
