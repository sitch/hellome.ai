/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"
import { PageArtworkUncheckedUpdateManyWithoutStoryNestedInputObjectSchema } from "./PageArtworkUncheckedUpdateManyWithoutStoryNestedInput.schema"
import { PageTextUncheckedUpdateManyWithoutStoryNestedInputObjectSchema } from "./PageTextUncheckedUpdateManyWithoutStoryNestedInput.schema"
import { PageUncheckedUpdateManyWithoutStoryNestedInputObjectSchema } from "./PageUncheckedUpdateManyWithoutStoryNestedInput.schema"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.StoryUncheckedUpdateWithoutAuthorInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    artistId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.union([z.date(), z.string().datetime().optional()]),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.union([z.date(), z.string().datetime().optional()]),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    deletedAt: z
      .union([
        z.union([z.date(), z.string().datetime().optional()]),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
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
