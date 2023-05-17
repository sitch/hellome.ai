import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { PDFUpdateOneRequiredWithoutEditionNestedInputObjectSchema } from "./PDFUpdateOneRequiredWithoutEditionNestedInput.schema"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { UserUpdateOneRequiredWithoutEditionNestedInputObjectSchema } from "./UserUpdateOneRequiredWithoutEditionNestedInput.schema"

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
      .lazy(() => PDFUpdateOneRequiredWithoutEditionNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const EditionUpdateInputObjectSchema = Schema
