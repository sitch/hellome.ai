import { PageStatusSchema } from '../enums/PageStatus.schema'
import { ArtistUpdateOneRequiredWithoutPageArtworksNestedInputObjectSchema } from './ArtistUpdateOneRequiredWithoutPageArtworksNestedInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { EnumPageStatusFieldUpdateOperationsInputObjectSchema } from './EnumPageStatusFieldUpdateOperationsInput.schema'
import { PageUpdateOneRequiredWithoutArtworksNestedInputObjectSchema } from './PageUpdateOneRequiredWithoutArtworksNestedInput.schema'
import { StoryUpdateOneRequiredWithoutPageArtworksNestedInputObjectSchema } from './StoryUpdateOneRequiredWithoutPageArtworksNestedInput.schema'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PageArtworkUpdateWithoutPhotoInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    status: z
      .union([
        z.lazy(() => PageStatusSchema),
        z.lazy(() => EnumPageStatusFieldUpdateOperationsInputObjectSchema),
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
    page: z
      .lazy(() => PageUpdateOneRequiredWithoutArtworksNestedInputObjectSchema)
      .optional(),
    story: z
      .lazy(
        () => StoryUpdateOneRequiredWithoutPageArtworksNestedInputObjectSchema
      )
      .optional(),
    artist: z
      .lazy(
        () => ArtistUpdateOneRequiredWithoutPageArtworksNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const PageArtworkUpdateWithoutPhotoInputObjectSchema = Schema
