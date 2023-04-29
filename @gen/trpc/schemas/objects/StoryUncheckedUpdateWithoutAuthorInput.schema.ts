import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"
import { PageArtworkUncheckedUpdateManyWithoutStoryNestedInputObjectSchema } from "./PageArtworkUncheckedUpdateManyWithoutStoryNestedInput.schema"
import { PageTextUncheckedUpdateManyWithoutStoryNestedInputObjectSchema } from "./PageTextUncheckedUpdateManyWithoutStoryNestedInput.schema"
import { PageUncheckedUpdateManyWithoutStoryNestedInputObjectSchema } from "./PageUncheckedUpdateManyWithoutStoryNestedInput.schema"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"

const Schema: z.ZodType<Prisma.StoryUncheckedUpdateWithoutAuthorInput> = z
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
    pages: z
      .lazy(() => PageUncheckedUpdateManyWithoutStoryNestedInputObjectSchema)
      .optional(),
    pageArtworks: z
      .lazy(
        () => PageArtworkUncheckedUpdateManyWithoutStoryNestedInputObjectSchema,
      )
      .optional(),
    pageTexts: z
      .lazy(
        () => PageTextUncheckedUpdateManyWithoutStoryNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict()

export const StoryUncheckedUpdateWithoutAuthorInputObjectSchema = Schema
