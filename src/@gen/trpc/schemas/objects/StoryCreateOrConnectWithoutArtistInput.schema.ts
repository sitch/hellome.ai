import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StoryCreateWithoutArtistInputObjectSchema } from "./StoryCreateWithoutArtistInput.schema"
import { StoryUncheckedCreateWithoutArtistInputObjectSchema } from "./StoryUncheckedCreateWithoutArtistInput.schema"
import { StoryWhereUniqueInputObjectSchema } from "./StoryWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.StoryCreateOrConnectWithoutArtistInput> = z
  .object({
    where: z.lazy(() => StoryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => StoryCreateWithoutArtistInputObjectSchema),
      z.lazy(() => StoryUncheckedCreateWithoutArtistInputObjectSchema),
    ]),
  })
  .strict()

export const StoryCreateOrConnectWithoutArtistInputObjectSchema = Schema
