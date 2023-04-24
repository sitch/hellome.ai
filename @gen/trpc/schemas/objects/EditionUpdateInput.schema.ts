import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { UserUpdateOneRequiredWithoutEditionNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutEditionNestedInput.schema'
import { PDFUpdateOneRequiredWithoutBookNestedInputObjectSchema } from './PDFUpdateOneRequiredWithoutBookNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EditionUpdateInput> = z
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
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutEditionNestedInputObjectSchema)
      .optional(),
    pdf: z
      .lazy(() => PDFUpdateOneRequiredWithoutBookNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const EditionUpdateInputObjectSchema = Schema
