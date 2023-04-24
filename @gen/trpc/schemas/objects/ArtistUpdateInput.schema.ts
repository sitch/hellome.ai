import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { StoryUpdateManyWithoutArtistNestedInputObjectSchema } from './StoryUpdateManyWithoutArtistNestedInput.schema'
import { PageArtworkUpdateManyWithoutArtistNestedInputObjectSchema } from './PageArtworkUpdateManyWithoutArtistNestedInput.schema'

import type { Prisma } from '@prisma/client'

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
