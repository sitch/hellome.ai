import { z } from 'zod'
import { PhotoSelectObjectSchema } from './PhotoSelect.schema'
import { PhotoIncludeObjectSchema } from './PhotoInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PhotoArgs> = z
  .object({
    select: z.lazy(() => PhotoSelectObjectSchema).optional(),
    include: z.lazy(() => PhotoIncludeObjectSchema).optional(),
  })
  .strict()

export const PhotoArgsObjectSchema = Schema
