import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { CloudFileUpdateOneRequiredWithoutPhotoNestedInputObjectSchema } from "./CloudFileUpdateOneRequiredWithoutPhotoNestedInput.schema"
import { ConceptUpdateManyWithoutPhotosNestedInputObjectSchema } from "./ConceptUpdateManyWithoutPhotosNestedInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema"
import { PageArtworkUpdateManyWithoutPhotoNestedInputObjectSchema } from "./PageArtworkUpdateManyWithoutPhotoNestedInput.schema"
import { PhotoUpdatetagsInputObjectSchema } from "./PhotoUpdatetagsInput.schema"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"

const Schema: z.ZodType<Prisma.PhotoUpdateInput> = z
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
    updatedAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    file: z
      .lazy(() => CloudFileUpdateOneRequiredWithoutPhotoNestedInputObjectSchema)
      .optional(),
    pageArtworks: z
      .lazy(() => PageArtworkUpdateManyWithoutPhotoNestedInputObjectSchema)
      .optional(),
    concepts: z
      .lazy(() => ConceptUpdateManyWithoutPhotosNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const PhotoUpdateInputObjectSchema = Schema
