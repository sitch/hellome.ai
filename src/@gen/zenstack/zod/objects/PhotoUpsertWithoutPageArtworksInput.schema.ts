/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PhotoCreateWithoutPageArtworksInputObjectSchema } from "./PhotoCreateWithoutPageArtworksInput.schema"
import { PhotoUncheckedCreateWithoutPageArtworksInputObjectSchema } from "./PhotoUncheckedCreateWithoutPageArtworksInput.schema"
import { PhotoUncheckedUpdateWithoutPageArtworksInputObjectSchema } from "./PhotoUncheckedUpdateWithoutPageArtworksInput.schema"
import { PhotoUpdateWithoutPageArtworksInputObjectSchema } from "./PhotoUpdateWithoutPageArtworksInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PhotoUpsertWithoutPageArtworksInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
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
