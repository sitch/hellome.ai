import { PageWhereInputObjectSchema } from './PageWhereInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PageListRelationFilter> = z
  .object({
    every: z.lazy(() => PageWhereInputObjectSchema).optional(),
    some: z.lazy(() => PageWhereInputObjectSchema).optional(),
    none: z.lazy(() => PageWhereInputObjectSchema).optional(),
  })
  .strict()

export const PageListRelationFilterObjectSchema = Schema
