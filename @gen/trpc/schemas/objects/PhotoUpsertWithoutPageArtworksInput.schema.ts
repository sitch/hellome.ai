import { PhotoCreateWithoutPageArtworksInputObjectSchema } from './PhotoCreateWithoutPageArtworksInput.schema'
import { PhotoUncheckedCreateWithoutPageArtworksInputObjectSchema } from './PhotoUncheckedCreateWithoutPageArtworksInput.schema'
import { PhotoUncheckedUpdateWithoutPageArtworksInputObjectSchema } from './PhotoUncheckedUpdateWithoutPageArtworksInput.schema'
import { PhotoUpdateWithoutPageArtworksInputObjectSchema } from './PhotoUpdateWithoutPageArtworksInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

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
