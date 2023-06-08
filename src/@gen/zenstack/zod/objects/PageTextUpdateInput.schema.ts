/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { LocaleSchema } from "../enums/Locale.schema"
import { PageStatusSchema } from "../enums/PageStatus.schema"
import { PageTextTypeSchema } from "../enums/PageTextType.schema"
import { AuthorUpdateOneWithoutPageTextsNestedInputObjectSchema } from "./AuthorUpdateOneWithoutPageTextsNestedInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { EnumLocaleFieldUpdateOperationsInputObjectSchema } from "./EnumLocaleFieldUpdateOperationsInput.schema"
import { EnumPageStatusFieldUpdateOperationsInputObjectSchema } from "./EnumPageStatusFieldUpdateOperationsInput.schema"
import { EnumPageTextTypeFieldUpdateOperationsInputObjectSchema } from "./EnumPageTextTypeFieldUpdateOperationsInput.schema"
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema"
import { PageUpdateOneRequiredWithoutTextsNestedInputObjectSchema } from "./PageUpdateOneRequiredWithoutTextsNestedInput.schema"
import { StoryUpdateOneRequiredWithoutPageTextsNestedInputObjectSchema } from "./StoryUpdateOneRequiredWithoutPageTextsNestedInput.schema"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { TranslatorUpdateOneWithoutPageTextsNestedInputObjectSchema } from "./TranslatorUpdateOneWithoutPageTextsNestedInput.schema"

const Schema: z.ZodType<
  Omit<Prisma.PageTextUpdateInput, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    status: z
      .union([
        z.lazy(() => PageStatusSchema),
        z.lazy(() => EnumPageStatusFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    locale: z
      .union([
        z.lazy(() => LocaleSchema),
        z.lazy(() => EnumLocaleFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    text: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    type: z
      .union([
        z.lazy(() => PageTextTypeSchema),
        z.lazy(() => EnumPageTextTypeFieldUpdateOperationsInputObjectSchema),
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
      .lazy(() => PageUpdateOneRequiredWithoutTextsNestedInputObjectSchema)
      .optional(),
    story: z
      .lazy(() => StoryUpdateOneRequiredWithoutPageTextsNestedInputObjectSchema)
      .optional(),
    author: z
      .lazy(() => AuthorUpdateOneWithoutPageTextsNestedInputObjectSchema)
      .optional(),
    translator: z
      .lazy(() => TranslatorUpdateOneWithoutPageTextsNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const PageTextUpdateInputObjectSchema = Schema
