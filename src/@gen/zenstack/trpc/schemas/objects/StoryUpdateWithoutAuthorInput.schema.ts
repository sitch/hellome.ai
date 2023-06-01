/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ArtistUpdateOneWithoutStoriesNestedInputObjectSchema } from "./ArtistUpdateOneWithoutStoriesNestedInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema"
import { PageArtworkUpdateManyWithoutStoryNestedInputObjectSchema } from "./PageArtworkUpdateManyWithoutStoryNestedInput.schema"
import { PageTextUpdateManyWithoutStoryNestedInputObjectSchema } from "./PageTextUpdateManyWithoutStoryNestedInput.schema"
import { PageUpdateManyWithoutStoryNestedInputObjectSchema } from "./PageUpdateManyWithoutStoryNestedInput.schema"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.StoryUpdateWithoutAuthorInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
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
    artist: z
      .lazy(() => ArtistUpdateOneWithoutStoriesNestedInputObjectSchema)
      .optional(),
    pages: z
      .lazy(() => PageUpdateManyWithoutStoryNestedInputObjectSchema)
      .optional(),
    pageArtworks: z
      .lazy(() => PageArtworkUpdateManyWithoutStoryNestedInputObjectSchema)
      .optional(),
    pageTexts: z
      .lazy(() => PageTextUpdateManyWithoutStoryNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const StoryUpdateWithoutAuthorInputObjectSchema = Schema
