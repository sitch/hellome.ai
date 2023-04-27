import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkUncheckedUpdateManyWithoutArtistNestedInputObjectSchema } from "./PageArtworkUncheckedUpdateManyWithoutArtistNestedInput.schema"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"

const Schema: z.ZodType<Prisma.ArtistUncheckedUpdateWithoutStoriesInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    pageArtworks: z
      .lazy(
        () => PageArtworkUncheckedUpdateManyWithoutArtistNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const ArtistUncheckedUpdateWithoutStoriesInputObjectSchema = Schema
