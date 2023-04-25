import { z } from 'zod'
import { AuthorSelectObjectSchema } from './AuthorSelect.schema'
import { AuthorIncludeObjectSchema } from './AuthorInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorArgs> = z
  .object({
    select: z.lazy(() => AuthorSelectObjectSchema).optional(),
    include: z.lazy(() => AuthorIncludeObjectSchema).optional(),
  })
  .strict()

export const AuthorArgsObjectSchema = Schema
