/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StoryCreateNestedManyWithoutArtistInputObjectSchema } from "./StoryCreateNestedManyWithoutArtistInput.schema"
import { UserCreateNestedOneWithoutArtistInputObjectSchema } from "./UserCreateNestedOneWithoutArtistInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.ArtistCreateWithoutPageArtworksInput,
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
    user: z.lazy(() => UserCreateNestedOneWithoutArtistInputObjectSchema),
  })
  .strict()

export const ArtistCreateWithoutPageArtworksInputObjectSchema = Schema
