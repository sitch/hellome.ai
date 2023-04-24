import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateManyInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    email: z.string(),
    updatedAt: z.date().optional(),
    createdAt: z.date().optional(),
  })
  .strict()

export const UserCreateManyInputObjectSchema = Schema
