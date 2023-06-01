/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkUncheckedCreateNestedManyWithoutArtistInputObjectSchema } from "./PageArtworkUncheckedCreateNestedManyWithoutArtistInput.schema"
import { StoryUncheckedCreateNestedManyWithoutArtistInputObjectSchema } from "./StoryUncheckedCreateNestedManyWithoutArtistInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.ArtistUncheckedCreateWithoutUserInput,
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
      .lazy(() => StoryUncheckedCreateNestedManyWithoutArtistInputObjectSchema)
      .optional(),
    pageArtworks: z
      .lazy(
        () =>
          PageArtworkUncheckedCreateNestedManyWithoutArtistInputObjectSchema,
      )
      .optional(),
  })
  .strict()

export const ArtistUncheckedCreateWithoutUserInputObjectSchema = Schema
