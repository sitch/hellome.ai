/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ArtistCreateWithoutStoriesInputObjectSchema } from "./ArtistCreateWithoutStoriesInput.schema"
import { ArtistUncheckedCreateWithoutStoriesInputObjectSchema } from "./ArtistUncheckedCreateWithoutStoriesInput.schema"
import { ArtistUncheckedUpdateWithoutStoriesInputObjectSchema } from "./ArtistUncheckedUpdateWithoutStoriesInput.schema"
import { ArtistUpdateWithoutStoriesInputObjectSchema } from "./ArtistUpdateWithoutStoriesInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.ArtistUpsertWithoutStoriesInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    update: z.union([
      z.lazy(() => ArtistUpdateWithoutStoriesInputObjectSchema),
      z.lazy(() => ArtistUncheckedUpdateWithoutStoriesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArtistCreateWithoutStoriesInputObjectSchema),
      z.lazy(() => ArtistUncheckedCreateWithoutStoriesInputObjectSchema),
    ]),
  })
  .strict()

export const ArtistUpsertWithoutStoriesInputObjectSchema = Schema
