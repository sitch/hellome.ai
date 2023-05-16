import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkUpdateManyWithoutArtistNestedInputObjectSchema } from "./PageArtworkUpdateManyWithoutArtistNestedInput.schema"
import { StoryUpdateManyWithoutArtistNestedInputObjectSchema } from "./StoryUpdateManyWithoutArtistNestedInput.schema"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"

const Schema: z.ZodType<Prisma.ArtistUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    stories: z
      .lazy(() => StoryUpdateManyWithoutArtistNestedInputObjectSchema)
      .optional(),
    pageArtworks: z
      .lazy(() => PageArtworkUpdateManyWithoutArtistNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const ArtistUpdateInputObjectSchema = Schema
