import { EditionIncludeObjectSchema } from './EditionInclude.schema'
import { EditionSelectObjectSchema } from './EditionSelect.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.EditionArgs> = z
  .object({
    select: z.lazy(() => EditionSelectObjectSchema).optional(),
    include: z.lazy(() => EditionIncludeObjectSchema).optional(),
  })
  .strict()

export const EditionArgsObjectSchema = Schema
