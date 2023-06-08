/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageStatusSchema } from "../enums/PageStatus.schema"
import { ArtistUpdateOneRequiredWithoutPageArtworksNestedInputObjectSchema } from "./ArtistUpdateOneRequiredWithoutPageArtworksNestedInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { EnumPageStatusFieldUpdateOperationsInputObjectSchema } from "./EnumPageStatusFieldUpdateOperationsInput.schema"
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema"
import { PageUpdateOneRequiredWithoutArtworksNestedInputObjectSchema } from "./PageUpdateOneRequiredWithoutArtworksNestedInput.schema"
import { PhotoUpdateOneRequiredWithoutPageArtworksNestedInputObjectSchema } from "./PhotoUpdateOneRequiredWithoutPageArtworksNestedInput.schema"
import { StoryUpdateOneRequiredWithoutPageArtworksNestedInputObjectSchema } from "./StoryUpdateOneRequiredWithoutPageArtworksNestedInput.schema"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"

const Schema: z.ZodType<
  Omit<Prisma.PageArtworkUpdateInput, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    status: z
      .union([
        z.lazy(() => PageStatusSchema),
        z.lazy(() => EnumPageStatusFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
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
    page: z
      .lazy(() => PageUpdateOneRequiredWithoutArtworksNestedInputObjectSchema)
      .optional(),
    story: z
      .lazy(
        () => StoryUpdateOneRequiredWithoutPageArtworksNestedInputObjectSchema,
      )
      .optional(),
    artist: z
      .lazy(
        () => ArtistUpdateOneRequiredWithoutPageArtworksNestedInputObjectSchema,
      )
      .optional(),
    photo: z
      .lazy(
        () => PhotoUpdateOneRequiredWithoutPageArtworksNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict()

export const PageArtworkUpdateInputObjectSchema = Schema
