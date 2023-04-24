import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { PageUncheckedUpdateManyWithoutStoryNestedInputObjectSchema } from './PageUncheckedUpdateManyWithoutStoryNestedInput.schema'
import { PageTextUncheckedUpdateManyWithoutStoryNestedInputObjectSchema } from './PageTextUncheckedUpdateManyWithoutStoryNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.StoryUncheckedUpdateWithoutPageArtworksInput> = z
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
    artistId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    authorId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    pages: z
      .lazy(() => PageUncheckedUpdateManyWithoutStoryNestedInputObjectSchema)
      .optional(),
    pageTexts: z
      .lazy(
        () => PageTextUncheckedUpdateManyWithoutStoryNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const StoryUncheckedUpdateWithoutPageArtworksInputObjectSchema = Schema
