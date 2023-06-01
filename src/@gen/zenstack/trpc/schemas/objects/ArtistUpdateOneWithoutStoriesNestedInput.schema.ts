/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ArtistCreateOrConnectWithoutStoriesInputObjectSchema } from "./ArtistCreateOrConnectWithoutStoriesInput.schema"
import { ArtistCreateWithoutStoriesInputObjectSchema } from "./ArtistCreateWithoutStoriesInput.schema"
import { ArtistUncheckedCreateWithoutStoriesInputObjectSchema } from "./ArtistUncheckedCreateWithoutStoriesInput.schema"
import { ArtistUncheckedUpdateWithoutStoriesInputObjectSchema } from "./ArtistUncheckedUpdateWithoutStoriesInput.schema"
import { ArtistUpdateWithoutStoriesInputObjectSchema } from "./ArtistUpdateWithoutStoriesInput.schema"
import { ArtistUpsertWithoutStoriesInputObjectSchema } from "./ArtistUpsertWithoutStoriesInput.schema"
import { ArtistWhereUniqueInputObjectSchema } from "./ArtistWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.ArtistUpdateOneWithoutStoriesNestedInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtistCreateWithoutStoriesInputObjectSchema),
        z.lazy(() => ArtistUncheckedCreateWithoutStoriesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ArtistCreateOrConnectWithoutStoriesInputObjectSchema)
      .optional(),
    upsert: z
      .lazy(() => ArtistUpsertWithoutStoriesInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ArtistWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ArtistUpdateWithoutStoriesInputObjectSchema),
        z.lazy(() => ArtistUncheckedUpdateWithoutStoriesInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const ArtistUpdateOneWithoutStoriesNestedInputObjectSchema = Schema
