/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StoryCreateWithoutArtistInputObjectSchema } from "./StoryCreateWithoutArtistInput.schema"
import { StoryUncheckedCreateWithoutArtistInputObjectSchema } from "./StoryUncheckedCreateWithoutArtistInput.schema"
import { StoryWhereUniqueInputObjectSchema } from "./StoryWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.StoryCreateOrConnectWithoutArtistInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => StoryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => StoryCreateWithoutArtistInputObjectSchema),
      z.lazy(() => StoryUncheckedCreateWithoutArtistInputObjectSchema),
    ]),
  })
  .strict()

export const StoryCreateOrConnectWithoutArtistInputObjectSchema = Schema
