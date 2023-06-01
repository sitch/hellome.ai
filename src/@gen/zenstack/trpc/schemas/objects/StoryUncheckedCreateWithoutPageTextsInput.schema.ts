/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkUncheckedCreateNestedManyWithoutStoryInputObjectSchema } from "./PageArtworkUncheckedCreateNestedManyWithoutStoryInput.schema"
import { PageUncheckedCreateNestedManyWithoutStoryInputObjectSchema } from "./PageUncheckedCreateNestedManyWithoutStoryInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.StoryUncheckedCreateWithoutPageTextsInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    artistId: z.string().optional().nullable(),
    authorId: z.string().optional().nullable(),
    id: z.string().optional(),
    createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    deletedAt: z
      .union([z.date().optional(), z.string().datetime().optional()])
      .nullable(),
    pages: z
      .lazy(() => PageUncheckedCreateNestedManyWithoutStoryInputObjectSchema)
      .optional(),
    pageArtworks: z
      .lazy(
        () => PageArtworkUncheckedCreateNestedManyWithoutStoryInputObjectSchema,
      )
      .optional(),
  })
  .strict()

export const StoryUncheckedCreateWithoutPageTextsInputObjectSchema = Schema
