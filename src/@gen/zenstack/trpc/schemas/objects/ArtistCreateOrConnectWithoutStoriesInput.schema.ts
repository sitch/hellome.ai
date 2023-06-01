/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ArtistCreateWithoutStoriesInputObjectSchema } from "./ArtistCreateWithoutStoriesInput.schema"
import { ArtistUncheckedCreateWithoutStoriesInputObjectSchema } from "./ArtistUncheckedCreateWithoutStoriesInput.schema"
import { ArtistWhereUniqueInputObjectSchema } from "./ArtistWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.ArtistCreateOrConnectWithoutStoriesInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => ArtistWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArtistCreateWithoutStoriesInputObjectSchema),
      z.lazy(() => ArtistUncheckedCreateWithoutStoriesInputObjectSchema),
    ]),
  })
  .strict()

export const ArtistCreateOrConnectWithoutStoriesInputObjectSchema = Schema
