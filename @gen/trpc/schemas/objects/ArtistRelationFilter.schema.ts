import { z } from 'zod'
import { ArtistWhereInputObjectSchema } from './ArtistWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ArtistRelationFilter> = z
  .object({
    is: z
      .lazy(() => ArtistWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ArtistWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const ArtistRelationFilterObjectSchema = Schema
