import { PageArtworkWhereInputObjectSchema } from './PageArtworkWhereInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PageArtworkListRelationFilter> = z
  .object({
    every: z.lazy(() => PageArtworkWhereInputObjectSchema).optional(),
    some: z.lazy(() => PageArtworkWhereInputObjectSchema).optional(),
    none: z.lazy(() => PageArtworkWhereInputObjectSchema).optional(),
  })
  .strict()

export const PageArtworkListRelationFilterObjectSchema = Schema
