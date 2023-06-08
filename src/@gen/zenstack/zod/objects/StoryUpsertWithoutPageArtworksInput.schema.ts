/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StoryCreateWithoutPageArtworksInputObjectSchema } from "./StoryCreateWithoutPageArtworksInput.schema"
import { StoryUncheckedCreateWithoutPageArtworksInputObjectSchema } from "./StoryUncheckedCreateWithoutPageArtworksInput.schema"
import { StoryUncheckedUpdateWithoutPageArtworksInputObjectSchema } from "./StoryUncheckedUpdateWithoutPageArtworksInput.schema"
import { StoryUpdateWithoutPageArtworksInputObjectSchema } from "./StoryUpdateWithoutPageArtworksInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.StoryUpsertWithoutPageArtworksInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    update: z.union([
      z.lazy(() => StoryUpdateWithoutPageArtworksInputObjectSchema),
      z.lazy(() => StoryUncheckedUpdateWithoutPageArtworksInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => StoryCreateWithoutPageArtworksInputObjectSchema),
      z.lazy(() => StoryUncheckedCreateWithoutPageArtworksInputObjectSchema),
    ]),
  })
  .strict()

export const StoryUpsertWithoutPageArtworksInputObjectSchema = Schema
