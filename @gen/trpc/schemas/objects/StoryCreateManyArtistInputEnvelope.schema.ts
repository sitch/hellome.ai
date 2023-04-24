import { z } from 'zod'
import { StoryCreateManyArtistInputObjectSchema } from './StoryCreateManyArtistInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.StoryCreateManyArtistInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => StoryCreateManyArtistInputObjectSchema),
      z.lazy(() => StoryCreateManyArtistInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const StoryCreateManyArtistInputEnvelopeObjectSchema = Schema
