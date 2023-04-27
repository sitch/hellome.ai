import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StoryCreateWithoutArtistInputObjectSchema } from "./StoryCreateWithoutArtistInput.schema"
import { StoryUncheckedCreateWithoutArtistInputObjectSchema } from "./StoryUncheckedCreateWithoutArtistInput.schema"
import { StoryUncheckedUpdateWithoutArtistInputObjectSchema } from "./StoryUncheckedUpdateWithoutArtistInput.schema"
import { StoryUpdateWithoutArtistInputObjectSchema } from "./StoryUpdateWithoutArtistInput.schema"
import { StoryWhereUniqueInputObjectSchema } from "./StoryWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.StoryUpsertWithWhereUniqueWithoutArtistInput> = z
  .object({
    where: z.lazy(() => StoryWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => StoryUpdateWithoutArtistInputObjectSchema),
      z.lazy(() => StoryUncheckedUpdateWithoutArtistInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => StoryCreateWithoutArtistInputObjectSchema),
      z.lazy(() => StoryUncheckedCreateWithoutArtistInputObjectSchema),
    ]),
  })
  .strict()

export const StoryUpsertWithWhereUniqueWithoutArtistInputObjectSchema = Schema
