import { PageArtworkCreateManyPhotoInputObjectSchema } from './PageArtworkCreateManyPhotoInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PageArtworkCreateManyPhotoInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => PageArtworkCreateManyPhotoInputObjectSchema),
      z.lazy(() => PageArtworkCreateManyPhotoInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const PageArtworkCreateManyPhotoInputEnvelopeObjectSchema = Schema
