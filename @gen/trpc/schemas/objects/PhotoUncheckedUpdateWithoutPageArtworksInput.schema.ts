import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptUncheckedUpdateManyWithoutPhotosNestedInputObjectSchema } from "./ConceptUncheckedUpdateManyWithoutPhotosNestedInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema"
import { PhotoUpdatetagsInputObjectSchema } from "./PhotoUpdatetagsInput.schema"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"

const Schema: z.ZodType<Prisma.PhotoUncheckedUpdateWithoutPageArtworksInput> = z
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
    concepts: z
      .lazy(
        () => ConceptUncheckedUpdateManyWithoutPhotosNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict()

export const PhotoUncheckedUpdateWithoutPageArtworksInputObjectSchema = Schema
