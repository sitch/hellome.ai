import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextUncheckedCreateNestedManyWithoutStoryInputObjectSchema } from "./PageTextUncheckedCreateNestedManyWithoutStoryInput.schema"
import { PageUncheckedCreateNestedManyWithoutStoryInputObjectSchema } from "./PageUncheckedCreateNestedManyWithoutStoryInput.schema"

const Schema: z.ZodType<Prisma.StoryUncheckedCreateWithoutPageArtworksInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    artistId: z.string().optional().nullable(),
    authorId: z.string().optional().nullable(),
    pages: z
      .lazy(() => PageUncheckedCreateNestedManyWithoutStoryInputObjectSchema)
      .optional(),
    pageTexts: z
      .lazy(
        () => PageTextUncheckedCreateNestedManyWithoutStoryInputObjectSchema,
      )
      .optional(),
  })
  .strict()

export const StoryUncheckedCreateWithoutPageArtworksInputObjectSchema = Schema
