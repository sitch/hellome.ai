import { z } from 'zod'
import { PhotoUpdateWithoutPageArtworksInputObjectSchema } from './PhotoUpdateWithoutPageArtworksInput.schema'
import { PhotoUncheckedUpdateWithoutPageArtworksInputObjectSchema } from './PhotoUncheckedUpdateWithoutPageArtworksInput.schema'
import { PhotoCreateWithoutPageArtworksInputObjectSchema } from './PhotoCreateWithoutPageArtworksInput.schema'
import { PhotoUncheckedCreateWithoutPageArtworksInputObjectSchema } from './PhotoUncheckedCreateWithoutPageArtworksInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PhotoUpsertWithoutPageArtworksInput> = z
  .object({
    update: z.union([
      z.lazy(() => PhotoUpdateWithoutPageArtworksInputObjectSchema),
      z.lazy(() => PhotoUncheckedUpdateWithoutPageArtworksInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PhotoCreateWithoutPageArtworksInputObjectSchema),
      z.lazy(() => PhotoUncheckedCreateWithoutPageArtworksInputObjectSchema),
    ]),
  })
  .strict()

export const PhotoUpsertWithoutPageArtworksInputObjectSchema = Schema
