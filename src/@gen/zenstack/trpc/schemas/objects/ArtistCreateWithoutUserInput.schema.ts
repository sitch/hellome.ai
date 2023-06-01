/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkCreateNestedManyWithoutArtistInputObjectSchema } from "./PageArtworkCreateNestedManyWithoutArtistInput.schema"
import { StoryCreateNestedManyWithoutArtistInputObjectSchema } from "./StoryCreateNestedManyWithoutArtistInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.ArtistCreateWithoutUserInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    id: z.string().optional(),
    createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    deletedAt: z
      .union([z.date().optional(), z.string().datetime().optional()])
      .nullable(),
    stories: z
      .lazy(() => StoryCreateNestedManyWithoutArtistInputObjectSchema)
      .optional(),
    pageArtworks: z
      .lazy(() => PageArtworkCreateNestedManyWithoutArtistInputObjectSchema)
      .optional(),
  })
  .strict()

export const ArtistCreateWithoutUserInputObjectSchema = Schema
