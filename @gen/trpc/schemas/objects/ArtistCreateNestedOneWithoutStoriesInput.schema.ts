import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ArtistCreateOrConnectWithoutStoriesInputObjectSchema } from "./ArtistCreateOrConnectWithoutStoriesInput.schema"
import { ArtistCreateWithoutStoriesInputObjectSchema } from "./ArtistCreateWithoutStoriesInput.schema"
import { ArtistUncheckedCreateWithoutStoriesInputObjectSchema } from "./ArtistUncheckedCreateWithoutStoriesInput.schema"
import { ArtistWhereUniqueInputObjectSchema } from "./ArtistWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.ArtistCreateNestedOneWithoutStoriesInput> = z
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
    connect: z.lazy(() => ArtistWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const ArtistCreateNestedOneWithoutStoriesInputObjectSchema = Schema
