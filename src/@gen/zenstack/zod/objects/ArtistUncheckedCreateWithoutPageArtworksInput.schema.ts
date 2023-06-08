/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StoryUncheckedCreateNestedManyWithoutArtistInputObjectSchema } from "./StoryUncheckedCreateNestedManyWithoutArtistInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.ArtistUncheckedCreateWithoutPageArtworksInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    userId: z.string(),
    id: z.string().optional(),
    createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    deletedAt: z
      .union([z.date().optional(), z.string().datetime().optional()])
      .nullable(),
    stories: z
      .lazy(() => StoryUncheckedCreateNestedManyWithoutArtistInputObjectSchema)
      .optional(),
  })
  .strict()

export const ArtistUncheckedCreateWithoutPageArtworksInputObjectSchema = Schema
