import { AuthorIncludeObjectSchema } from './AuthorInclude.schema'
import { AuthorSelectObjectSchema } from './AuthorSelect.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.AuthorArgs> = z
  .object({
    select: z.lazy(() => AuthorSelectObjectSchema).optional(),
    include: z.lazy(() => AuthorIncludeObjectSchema).optional(),
  })
  .strict()

export const AuthorArgsObjectSchema = Schema
