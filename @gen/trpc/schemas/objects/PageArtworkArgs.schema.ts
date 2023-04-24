import { z } from 'zod'
import { PageArtworkIncludeObjectSchema } from './PageArtworkInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageArtworkArgs> = z
  .object({
    include: z.lazy(() => PageArtworkIncludeObjectSchema).optional(),
  })
  .strict()

export const PageArtworkArgsObjectSchema = Schema
