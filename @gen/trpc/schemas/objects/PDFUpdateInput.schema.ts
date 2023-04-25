import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { PDFUpdatetagsInputObjectSchema } from './PDFUpdatetagsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { CloudFileUpdateOneRequiredWithoutPdfNestedInputObjectSchema } from './CloudFileUpdateOneRequiredWithoutPdfNestedInput.schema'
import { EditionUpdateOneWithoutPdfNestedInputObjectSchema } from './EditionUpdateOneWithoutPdfNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PDFUpdateInput> = z
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
    pages: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    tags: z
      .union([z.lazy(() => PDFUpdatetagsInputObjectSchema), z.string().array()])
      .optional(),
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    file: z
      .lazy(() => CloudFileUpdateOneRequiredWithoutPdfNestedInputObjectSchema)
      .optional(),
    edition: z
      .lazy(() => EditionUpdateOneWithoutPdfNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const PDFUpdateInputObjectSchema = Schema
