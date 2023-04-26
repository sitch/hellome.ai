import { PageArtworkCreateManyStoryInputObjectSchema } from './PageArtworkCreateManyStoryInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PageArtworkCreateManyStoryInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => PageArtworkCreateManyStoryInputObjectSchema),
      z.lazy(() => PageArtworkCreateManyStoryInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const PageArtworkCreateManyStoryInputEnvelopeObjectSchema = Schema
