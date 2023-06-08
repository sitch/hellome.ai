/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StoryCreateManyArtistInputObjectSchema } from "./StoryCreateManyArtistInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.StoryCreateManyArtistInputEnvelope,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    data: z.union([
      z.lazy(() => StoryCreateManyArtistInputObjectSchema),
      z.lazy(() => StoryCreateManyArtistInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const StoryCreateManyArtistInputEnvelopeObjectSchema = Schema
