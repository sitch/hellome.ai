import { PhotoIncludeObjectSchema } from './PhotoInclude.schema'
import { PhotoSelectObjectSchema } from './PhotoSelect.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PhotoArgs> = z
  .object({
    select: z.lazy(() => PhotoSelectObjectSchema).optional(),
    include: z.lazy(() => PhotoIncludeObjectSchema).optional(),
  })
  .strict()

export const PhotoArgsObjectSchema = Schema
