import { ArtistCountOutputTypeSelectObjectSchema } from './ArtistCountOutputTypeSelect.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.ArtistCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => ArtistCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const ArtistCountOutputTypeArgsObjectSchema = Schema
