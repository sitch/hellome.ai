import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageStatusSchema } from "../enums/PageStatus.schema"
import { PageTypeSchema } from "../enums/PageType.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { EnumPageStatusFieldUpdateOperationsInputObjectSchema } from "./EnumPageStatusFieldUpdateOperationsInput.schema"
import { EnumPageTypeFieldUpdateOperationsInputObjectSchema } from "./EnumPageTypeFieldUpdateOperationsInput.schema"
import { IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema"
import { PageArtworkUncheckedUpdateManyWithoutPageNestedInputObjectSchema } from "./PageArtworkUncheckedUpdateManyWithoutPageNestedInput.schema"
import { PageTextUncheckedUpdateManyWithoutPageNestedInputObjectSchema } from "./PageTextUncheckedUpdateManyWithoutPageNestedInput.schema"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"

const Schema: z.ZodType<Prisma.PageUncheckedUpdateWithoutStoryInput> = z
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
    type: z
      .union([
        z.lazy(() => PageTypeSchema),
        z.lazy(() => EnumPageTypeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    pageNumber: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
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
    artworks: z
      .lazy(
        () => PageArtworkUncheckedUpdateManyWithoutPageNestedInputObjectSchema,
      )
      .optional(),
    texts: z
      .lazy(() => PageTextUncheckedUpdateManyWithoutPageNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const PageUncheckedUpdateWithoutStoryInputObjectSchema = Schema
