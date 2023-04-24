import { z } from 'zod'
import { AuthorWhereInputObjectSchema } from './AuthorWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorRelationFilter> = z
  .object({
    is: z
      .lazy(() => AuthorWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => AuthorWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const AuthorRelationFilterObjectSchema = Schema
