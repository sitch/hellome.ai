import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { ArtistUpdateOneWithoutStoriesNestedInputObjectSchema } from './ArtistUpdateOneWithoutStoriesNestedInput.schema'
import { AuthorUpdateOneWithoutStoriesNestedInputObjectSchema } from './AuthorUpdateOneWithoutStoriesNestedInput.schema'
import { PageUpdateManyWithoutStoryNestedInputObjectSchema } from './PageUpdateManyWithoutStoryNestedInput.schema'
import { PageTextUpdateManyWithoutStoryNestedInputObjectSchema } from './PageTextUpdateManyWithoutStoryNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.StoryUpdateWithoutPageArtworksInput> = z
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
    pageTexts: z
      .lazy(() => PageTextUpdateManyWithoutStoryNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const StoryUpdateWithoutPageArtworksInputObjectSchema = Schema
