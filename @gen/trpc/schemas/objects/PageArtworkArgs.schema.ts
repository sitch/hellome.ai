import { z } from 'zod'
import { PageArtworkSelectObjectSchema } from './PageArtworkSelect.schema'
import { PageArtworkIncludeObjectSchema } from './PageArtworkInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageArtworkArgs> = z
  .object({
    select: z.lazy(() => PageArtworkSelectObjectSchema).optional(),
    include: z.lazy(() => PageArtworkIncludeObjectSchema).optional(),
  })
  .strict()

export const PageArtworkArgsObjectSchema = Schema
