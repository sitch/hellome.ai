import { z } from 'zod'
import { AuthorCountOutputTypeSelectObjectSchema } from './AuthorCountOutputTypeSelect.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => AuthorCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const AuthorCountOutputTypeArgsObjectSchema = Schema
