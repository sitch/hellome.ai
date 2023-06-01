/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkUncheckedCreateNestedManyWithoutArtistInputObjectSchema } from "./PageArtworkUncheckedCreateNestedManyWithoutArtistInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.ArtistUncheckedCreateWithoutStoriesInput,
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
    pageArtworks: z
      .lazy(
        () =>
          PageArtworkUncheckedCreateNestedManyWithoutArtistInputObjectSchema,
      )
      .optional(),
  })
  .strict()

export const ArtistUncheckedCreateWithoutStoriesInputObjectSchema = Schema
