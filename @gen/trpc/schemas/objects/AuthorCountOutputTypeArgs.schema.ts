import { AuthorCountOutputTypeSelectObjectSchema } from './AuthorCountOutputTypeSelect.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.AuthorCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => AuthorCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const AuthorCountOutputTypeArgsObjectSchema = Schema
