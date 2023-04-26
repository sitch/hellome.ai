import { UserCountOutputTypeSelectObjectSchema } from './UserCountOutputTypeSelect.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.UserCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => UserCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const UserCountOutputTypeArgsObjectSchema = Schema
