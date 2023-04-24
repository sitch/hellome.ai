import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { PageArtworkUpdateManyWithoutArtistNestedInputObjectSchema } from './PageArtworkUpdateManyWithoutArtistNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ArtistUpdateWithoutStoriesInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    pageArtworks: z
      .lazy(() => PageArtworkUpdateManyWithoutArtistNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const ArtistUpdateWithoutStoriesInputObjectSchema = Schema
