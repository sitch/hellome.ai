import { z } from 'zod'
import { PageArtworkWhereInputObjectSchema } from './PageArtworkWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageArtworkListRelationFilter> = z
  .object({
    every: z.lazy(() => PageArtworkWhereInputObjectSchema).optional(),
    some: z.lazy(() => PageArtworkWhereInputObjectSchema).optional(),
    none: z.lazy(() => PageArtworkWhereInputObjectSchema).optional(),
  })
  .strict()

export const PageArtworkListRelationFilterObjectSchema = Schema
