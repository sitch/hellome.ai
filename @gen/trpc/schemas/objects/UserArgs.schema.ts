import { z } from 'zod'
import { UserIncludeObjectSchema } from './UserInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserArgs> = z
  .object({
    include: z.lazy(() => UserIncludeObjectSchema).optional(),
  })
  .strict()

export const UserArgsObjectSchema = Schema
