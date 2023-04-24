import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CloudFileWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    path: z.string().optional(),
    signature: z.string().optional(),
  })
  .strict()

export const CloudFileWhereUniqueInputObjectSchema = Schema
