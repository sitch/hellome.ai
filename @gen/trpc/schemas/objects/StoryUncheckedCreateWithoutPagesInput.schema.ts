import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkUncheckedCreateNestedManyWithoutStoryInputObjectSchema } from "./PageArtworkUncheckedCreateNestedManyWithoutStoryInput.schema"
import { PageTextUncheckedCreateNestedManyWithoutStoryInputObjectSchema } from "./PageTextUncheckedCreateNestedManyWithoutStoryInput.schema"

const Schema: z.ZodType<Prisma.StoryUncheckedCreateWithoutPagesInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    artistId: z.string().optional().nullable(),
    authorId: z.string().optional().nullable(),
    pageArtworks: z
      .lazy(
        () => PageArtworkUncheckedCreateNestedManyWithoutStoryInputObjectSchema
      )
      .optional(),
    pageTexts: z
      .lazy(
        () => PageTextUncheckedCreateNestedManyWithoutStoryInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const StoryUncheckedCreateWithoutPagesInputObjectSchema = Schema
