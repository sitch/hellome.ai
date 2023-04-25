import { z } from 'zod'
import { ArtistCountOutputTypeSelectObjectSchema } from './ArtistCountOutputTypeSelect.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ArtistCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => ArtistCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const ArtistCountOutputTypeArgsObjectSchema = Schema
