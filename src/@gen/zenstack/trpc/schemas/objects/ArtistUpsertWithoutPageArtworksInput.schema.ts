/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ArtistCreateWithoutPageArtworksInputObjectSchema } from "./ArtistCreateWithoutPageArtworksInput.schema"
import { ArtistUncheckedCreateWithoutPageArtworksInputObjectSchema } from "./ArtistUncheckedCreateWithoutPageArtworksInput.schema"
import { ArtistUncheckedUpdateWithoutPageArtworksInputObjectSchema } from "./ArtistUncheckedUpdateWithoutPageArtworksInput.schema"
import { ArtistUpdateWithoutPageArtworksInputObjectSchema } from "./ArtistUpdateWithoutPageArtworksInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.ArtistUpsertWithoutPageArtworksInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
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
