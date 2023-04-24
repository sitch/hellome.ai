import { z } from 'zod'
import { PhotoIncludeObjectSchema } from './PhotoInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PhotoArgs> = z
  .object({
    include: z.lazy(() => PhotoIncludeObjectSchema).optional(),
  })
  .strict()

export const PhotoArgsObjectSchema = Schema
