import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { StoryUncheckedUpdateManyWithoutArtistNestedInputObjectSchema } from './StoryUncheckedUpdateManyWithoutArtistNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ArtistUncheckedUpdateWithoutPageArtworksInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      stories: z
        .lazy(
          () => StoryUncheckedUpdateManyWithoutArtistNestedInputObjectSchema
        )
        .optional(),
    })
    .strict()

export const ArtistUncheckedUpdateWithoutPageArtworksInputObjectSchema = Schema
