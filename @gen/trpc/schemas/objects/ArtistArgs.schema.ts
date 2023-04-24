import { z } from 'zod'
import { ArtistIncludeObjectSchema } from './ArtistInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ArtistArgs> = z
  .object({
    include: z.lazy(() => ArtistIncludeObjectSchema).optional(),
  })
  .strict()

export const ArtistArgsObjectSchema = Schema
