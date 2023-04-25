import { z } from 'zod'
import { PhotoCountOutputTypeSelectObjectSchema } from './PhotoCountOutputTypeSelect.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PhotoCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => PhotoCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const PhotoCountOutputTypeArgsObjectSchema = Schema
