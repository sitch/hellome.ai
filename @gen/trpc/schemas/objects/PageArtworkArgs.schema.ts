import { PageArtworkIncludeObjectSchema } from './PageArtworkInclude.schema'
import { PageArtworkSelectObjectSchema } from './PageArtworkSelect.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PageArtworkArgs> = z
  .object({
    select: z.lazy(() => PageArtworkSelectObjectSchema).optional(),
    include: z.lazy(() => PageArtworkIncludeObjectSchema).optional(),
  })
  .strict()

export const PageArtworkArgsObjectSchema = Schema
