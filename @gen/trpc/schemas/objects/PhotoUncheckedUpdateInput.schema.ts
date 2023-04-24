import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { PhotoUpdatetagsInputObjectSchema } from './PhotoUpdatetagsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { PageArtworkUncheckedUpdateManyWithoutPhotoNestedInputObjectSchema } from './PageArtworkUncheckedUpdateManyWithoutPhotoNestedInput.schema'
import { ConceptUncheckedUpdateManyWithoutPhotosNestedInputObjectSchema } from './ConceptUncheckedUpdateManyWithoutPhotosNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PhotoUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    height: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    width: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    tags: z
      .union([
        z.lazy(() => PhotoUpdatetagsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    fileId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    pageArtworks: z
      .lazy(
        () => PageArtworkUncheckedUpdateManyWithoutPhotoNestedInputObjectSchema
      )
      .optional(),
    concepts: z
      .lazy(
        () => ConceptUncheckedUpdateManyWithoutPhotosNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const PhotoUncheckedUpdateInputObjectSchema = Schema
