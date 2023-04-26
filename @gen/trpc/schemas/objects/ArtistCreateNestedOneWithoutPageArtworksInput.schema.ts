import { ArtistCreateOrConnectWithoutPageArtworksInputObjectSchema } from './ArtistCreateOrConnectWithoutPageArtworksInput.schema'
import { ArtistCreateWithoutPageArtworksInputObjectSchema } from './ArtistCreateWithoutPageArtworksInput.schema'
import { ArtistUncheckedCreateWithoutPageArtworksInputObjectSchema } from './ArtistUncheckedCreateWithoutPageArtworksInput.schema'
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.ArtistCreateNestedOneWithoutPageArtworksInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ArtistCreateWithoutPageArtworksInputObjectSchema),
          z.lazy(
            () => ArtistUncheckedCreateWithoutPageArtworksInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ArtistCreateOrConnectWithoutPageArtworksInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ArtistWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const ArtistCreateNestedOneWithoutPageArtworksInputObjectSchema = Schema
