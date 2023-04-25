import { z } from 'zod'
import { ArtistSelectObjectSchema } from './ArtistSelect.schema'
import { ArtistIncludeObjectSchema } from './ArtistInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ArtistArgs> = z
  .object({
    select: z.lazy(() => ArtistSelectObjectSchema).optional(),
    include: z.lazy(() => ArtistIncludeObjectSchema).optional(),
  })
  .strict()

export const ArtistArgsObjectSchema = Schema
