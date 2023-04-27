import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StoryUpdateManyWithoutArtistNestedInputObjectSchema } from "./StoryUpdateManyWithoutArtistNestedInput.schema"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"

const Schema: z.ZodType<Prisma.ArtistUpdateWithoutPageArtworksInput> = z
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
  })
  .strict()

export const ArtistUpdateWithoutPageArtworksInputObjectSchema = Schema
