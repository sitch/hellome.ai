import { z } from 'zod'
import { PageArtworkCreateManyArtistInputObjectSchema } from './PageArtworkCreateManyArtistInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageArtworkCreateManyArtistInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => PageArtworkCreateManyArtistInputObjectSchema),
      z.lazy(() => PageArtworkCreateManyArtistInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const PageArtworkCreateManyArtistInputEnvelopeObjectSchema = Schema