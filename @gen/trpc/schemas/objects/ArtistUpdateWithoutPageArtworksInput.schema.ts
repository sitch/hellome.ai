import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { StoryUpdateManyWithoutArtistNestedInputObjectSchema } from './StoryUpdateManyWithoutArtistNestedInput.schema'

import type { Prisma } from '@prisma/client'

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
