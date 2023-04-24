import { z } from 'zod'
import { ArtistUpdateWithoutPageArtworksInputObjectSchema } from './ArtistUpdateWithoutPageArtworksInput.schema'
import { ArtistUncheckedUpdateWithoutPageArtworksInputObjectSchema } from './ArtistUncheckedUpdateWithoutPageArtworksInput.schema'
import { ArtistCreateWithoutPageArtworksInputObjectSchema } from './ArtistCreateWithoutPageArtworksInput.schema'
import { ArtistUncheckedCreateWithoutPageArtworksInputObjectSchema } from './ArtistUncheckedCreateWithoutPageArtworksInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ArtistUpsertWithoutPageArtworksInput> = z
  .object({
    update: z.union([
      z.lazy(() => ArtistUpdateWithoutPageArtworksInputObjectSchema),
      z.lazy(() => ArtistUncheckedUpdateWithoutPageArtworksInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArtistCreateWithoutPageArtworksInputObjectSchema),
      z.lazy(() => ArtistUncheckedCreateWithoutPageArtworksInputObjectSchema),
    ]),
  })
  .strict()

export const ArtistUpsertWithoutPageArtworksInputObjectSchema = Schema
