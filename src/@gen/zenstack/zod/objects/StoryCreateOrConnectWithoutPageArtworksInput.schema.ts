/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StoryCreateWithoutPageArtworksInputObjectSchema } from "./StoryCreateWithoutPageArtworksInput.schema"
import { StoryUncheckedCreateWithoutPageArtworksInputObjectSchema } from "./StoryUncheckedCreateWithoutPageArtworksInput.schema"
import { StoryWhereUniqueInputObjectSchema } from "./StoryWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.StoryCreateOrConnectWithoutPageArtworksInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => StoryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => StoryCreateWithoutPageArtworksInputObjectSchema),
      z.lazy(() => StoryUncheckedCreateWithoutPageArtworksInputObjectSchema),
    ]),
  })
  .strict()

export const StoryCreateOrConnectWithoutPageArtworksInputObjectSchema = Schema
