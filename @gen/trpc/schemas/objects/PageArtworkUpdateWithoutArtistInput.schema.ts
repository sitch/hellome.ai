import { PageStatusSchema } from '../enums/PageStatus.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { EnumPageStatusFieldUpdateOperationsInputObjectSchema } from './EnumPageStatusFieldUpdateOperationsInput.schema'
import { PageUpdateOneRequiredWithoutArtworksNestedInputObjectSchema } from './PageUpdateOneRequiredWithoutArtworksNestedInput.schema'
import { PhotoUpdateOneRequiredWithoutPageArtworksNestedInputObjectSchema } from './PhotoUpdateOneRequiredWithoutPageArtworksNestedInput.schema'
import { StoryUpdateOneRequiredWithoutPageArtworksNestedInputObjectSchema } from './StoryUpdateOneRequiredWithoutPageArtworksNestedInput.schema'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PageArtworkUpdateWithoutArtistInput> = z
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
    photo: z
      .lazy(
        () => PhotoUpdateOneRequiredWithoutPageArtworksNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const PageArtworkUpdateWithoutArtistInputObjectSchema = Schema
