import { LocaleSchema } from '../enums/Locale.schema'
import { PageStatusSchema } from '../enums/PageStatus.schema'
import { PageTextTypeSchema } from '../enums/PageTextType.schema'
import { AuthorUpdateOneWithoutPageTextsNestedInputObjectSchema } from './AuthorUpdateOneWithoutPageTextsNestedInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { EnumLocaleFieldUpdateOperationsInputObjectSchema } from './EnumLocaleFieldUpdateOperationsInput.schema'
import { EnumPageStatusFieldUpdateOperationsInputObjectSchema } from './EnumPageStatusFieldUpdateOperationsInput.schema'
import { EnumPageTextTypeFieldUpdateOperationsInputObjectSchema } from './EnumPageTextTypeFieldUpdateOperationsInput.schema'
import { PageUpdateOneRequiredWithoutTextsNestedInputObjectSchema } from './PageUpdateOneRequiredWithoutTextsNestedInput.schema'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { TranslatorUpdateOneWithoutPageTextsNestedInputObjectSchema } from './TranslatorUpdateOneWithoutPageTextsNestedInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PageTextUpdateWithoutStoryInput> = z
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
      .lazy(() => PageUpdateOneRequiredWithoutTextsNestedInputObjectSchema)
      .optional(),
    author: z
      .lazy(() => AuthorUpdateOneWithoutPageTextsNestedInputObjectSchema)
      .optional(),
    translator: z
      .lazy(() => TranslatorUpdateOneWithoutPageTextsNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const PageTextUpdateWithoutStoryInputObjectSchema = Schema
