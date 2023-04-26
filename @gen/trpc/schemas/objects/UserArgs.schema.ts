import { UserIncludeObjectSchema } from './UserInclude.schema'
import { UserSelectObjectSchema } from './UserSelect.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.UserArgs> = z
  .object({
    select: z.lazy(() => UserSelectObjectSchema).optional(),
    include: z.lazy(() => UserIncludeObjectSchema).optional(),
  })
  .strict()

export const UserArgsObjectSchema = Schema
