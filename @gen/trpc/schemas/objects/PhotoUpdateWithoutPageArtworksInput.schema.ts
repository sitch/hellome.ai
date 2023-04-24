import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { PhotoUpdatetagsInputObjectSchema } from './PhotoUpdatetagsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { CloudFileUpdateOneRequiredWithoutPhotoNestedInputObjectSchema } from './CloudFileUpdateOneRequiredWithoutPhotoNestedInput.schema'
import { ConceptUpdateManyWithoutPhotosNestedInputObjectSchema } from './ConceptUpdateManyWithoutPhotosNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PhotoUpdateWithoutPageArtworksInput> = z
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
    file: z
      .lazy(() => CloudFileUpdateOneRequiredWithoutPhotoNestedInputObjectSchema)
      .optional(),
    concepts: z
      .lazy(() => ConceptUpdateManyWithoutPhotosNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const PhotoUpdateWithoutPageArtworksInputObjectSchema = Schema
