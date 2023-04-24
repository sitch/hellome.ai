import { z } from 'zod'
import { PageArtworkCreateManyPageInputObjectSchema } from './PageArtworkCreateManyPageInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageArtworkCreateManyPageInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => PageArtworkCreateManyPageInputObjectSchema),
      z.lazy(() => PageArtworkCreateManyPageInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const PageArtworkCreateManyPageInputEnvelopeObjectSchema = Schema
