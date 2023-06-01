/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ArtistCreateOrConnectWithoutPageArtworksInputObjectSchema } from "./ArtistCreateOrConnectWithoutPageArtworksInput.schema"
import { ArtistCreateWithoutPageArtworksInputObjectSchema } from "./ArtistCreateWithoutPageArtworksInput.schema"
import { ArtistUncheckedCreateWithoutPageArtworksInputObjectSchema } from "./ArtistUncheckedCreateWithoutPageArtworksInput.schema"
import { ArtistWhereUniqueInputObjectSchema } from "./ArtistWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.ArtistCreateNestedOneWithoutPageArtworksInput,
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
    connect: z.lazy(() => ArtistWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const ArtistCreateNestedOneWithoutPageArtworksInputObjectSchema = Schema
