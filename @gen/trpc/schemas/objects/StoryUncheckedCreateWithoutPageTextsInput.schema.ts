import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkUncheckedCreateNestedManyWithoutStoryInputObjectSchema } from "./PageArtworkUncheckedCreateNestedManyWithoutStoryInput.schema"
import { PageUncheckedCreateNestedManyWithoutStoryInputObjectSchema } from "./PageUncheckedCreateNestedManyWithoutStoryInput.schema"

const Schema: z.ZodType<Prisma.StoryUncheckedCreateWithoutPageTextsInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    artistId: z.string().optional().nullable(),
    authorId: z.string().optional().nullable(),
    pages: z
      .lazy(() => PageUncheckedCreateNestedManyWithoutStoryInputObjectSchema)
      .optional(),
    pageArtworks: z
      .lazy(
        () => PageArtworkUncheckedCreateNestedManyWithoutStoryInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const StoryUncheckedCreateWithoutPageTextsInputObjectSchema = Schema
