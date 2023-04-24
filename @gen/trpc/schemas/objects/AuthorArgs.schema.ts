import { z } from 'zod'
import { AuthorIncludeObjectSchema } from './AuthorInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorArgs> = z
  .object({
    include: z.lazy(() => AuthorIncludeObjectSchema).optional(),
  })
  .strict()

export const AuthorArgsObjectSchema = Schema
