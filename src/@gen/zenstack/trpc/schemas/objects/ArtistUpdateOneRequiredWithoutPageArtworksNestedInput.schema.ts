/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ArtistCreateOrConnectWithoutPageArtworksInputObjectSchema } from "./ArtistCreateOrConnectWithoutPageArtworksInput.schema"
import { ArtistCreateWithoutPageArtworksInputObjectSchema } from "./ArtistCreateWithoutPageArtworksInput.schema"
import { ArtistUncheckedCreateWithoutPageArtworksInputObjectSchema } from "./ArtistUncheckedCreateWithoutPageArtworksInput.schema"
import { ArtistUncheckedUpdateWithoutPageArtworksInputObjectSchema } from "./ArtistUncheckedUpdateWithoutPageArtworksInput.schema"
import { ArtistUpdateWithoutPageArtworksInputObjectSchema } from "./ArtistUpdateWithoutPageArtworksInput.schema"
import { ArtistUpsertWithoutPageArtworksInputObjectSchema } from "./ArtistUpsertWithoutPageArtworksInput.schema"
import { ArtistWhereUniqueInputObjectSchema } from "./ArtistWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.ArtistUpdateOneRequiredWithoutPageArtworksNestedInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtistCreateWithoutPageArtworksInputObjectSchema),
        z.lazy(() => ArtistUncheckedCreateWithoutPageArtworksInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ArtistCreateOrConnectWithoutPageArtworksInputObjectSchema)
      .optional(),
    upsert: z
      .lazy(() => ArtistUpsertWithoutPageArtworksInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ArtistWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ArtistUpdateWithoutPageArtworksInputObjectSchema),
        z.lazy(() => ArtistUncheckedUpdateWithoutPageArtworksInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const ArtistUpdateOneRequiredWithoutPageArtworksNestedInputObjectSchema =
  Schema
