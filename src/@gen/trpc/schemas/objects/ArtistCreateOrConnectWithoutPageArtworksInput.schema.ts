import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ArtistCreateWithoutPageArtworksInputObjectSchema } from "./ArtistCreateWithoutPageArtworksInput.schema"
import { ArtistUncheckedCreateWithoutPageArtworksInputObjectSchema } from "./ArtistUncheckedCreateWithoutPageArtworksInput.schema"
import { ArtistWhereUniqueInputObjectSchema } from "./ArtistWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.ArtistCreateOrConnectWithoutPageArtworksInput> =
  z
    .object({
      where: z.lazy(() => ArtistWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ArtistCreateWithoutPageArtworksInputObjectSchema),
        z.lazy(() => ArtistUncheckedCreateWithoutPageArtworksInputObjectSchema),
      ]),
    })
    .strict()

export const ArtistCreateOrConnectWithoutPageArtworksInputObjectSchema = Schema
