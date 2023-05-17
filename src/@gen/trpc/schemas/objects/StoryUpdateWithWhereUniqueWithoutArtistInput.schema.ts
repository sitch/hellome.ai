import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StoryUncheckedUpdateWithoutArtistInputObjectSchema } from "./StoryUncheckedUpdateWithoutArtistInput.schema"
import { StoryUpdateWithoutArtistInputObjectSchema } from "./StoryUpdateWithoutArtistInput.schema"
import { StoryWhereUniqueInputObjectSchema } from "./StoryWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.StoryUpdateWithWhereUniqueWithoutArtistInput> = z
  .object({
    where: z.lazy(() => StoryWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => StoryUpdateWithoutArtistInputObjectSchema),
      z.lazy(() => StoryUncheckedUpdateWithoutArtistInputObjectSchema),
    ]),
  })
  .strict()

export const StoryUpdateWithWhereUniqueWithoutArtistInputObjectSchema = Schema
