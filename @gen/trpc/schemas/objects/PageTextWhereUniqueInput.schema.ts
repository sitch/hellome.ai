import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PageTextWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict()

export const PageTextWhereUniqueInputObjectSchema = Schema
