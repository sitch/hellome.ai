import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { StoryUncheckedUpdateManyWithoutArtistNestedInputObjectSchema } from './StoryUncheckedUpdateManyWithoutArtistNestedInput.schema'
import { PageArtworkUncheckedUpdateManyWithoutArtistNestedInputObjectSchema } from './PageArtworkUncheckedUpdateManyWithoutArtistNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ArtistUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    stories: z
      .lazy(() => StoryUncheckedUpdateManyWithoutArtistNestedInputObjectSchema)
      .optional(),
    pageArtworks: z
      .lazy(
        () => PageArtworkUncheckedUpdateManyWithoutArtistNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const ArtistUncheckedUpdateInputObjectSchema = Schema
