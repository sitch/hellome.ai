import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { ArtistUpdateOneWithoutStoriesNestedInputObjectSchema } from './ArtistUpdateOneWithoutStoriesNestedInput.schema'
import { AuthorUpdateOneWithoutStoriesNestedInputObjectSchema } from './AuthorUpdateOneWithoutStoriesNestedInput.schema'
import { PageUpdateManyWithoutStoryNestedInputObjectSchema } from './PageUpdateManyWithoutStoryNestedInput.schema'
import { PageArtworkUpdateManyWithoutStoryNestedInputObjectSchema } from './PageArtworkUpdateManyWithoutStoryNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.StoryUpdateWithoutPageTextsInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    artist: z
      .lazy(() => ArtistUpdateOneWithoutStoriesNestedInputObjectSchema)
      .optional(),
    author: z
      .lazy(() => AuthorUpdateOneWithoutStoriesNestedInputObjectSchema)
      .optional(),
    pages: z
      .lazy(() => PageUpdateManyWithoutStoryNestedInputObjectSchema)
      .optional(),
    pageArtworks: z
      .lazy(() => PageArtworkUpdateManyWithoutStoryNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const StoryUpdateWithoutPageTextsInputObjectSchema = Schema
