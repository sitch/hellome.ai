import { PageCountOutputTypeSelectObjectSchema } from './PageCountOutputTypeSelect.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PageCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => PageCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const PageCountOutputTypeArgsObjectSchema = Schema
