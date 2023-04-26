import { PageArtworkCreateManyArtistInputObjectSchema } from './PageArtworkCreateManyArtistInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

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
