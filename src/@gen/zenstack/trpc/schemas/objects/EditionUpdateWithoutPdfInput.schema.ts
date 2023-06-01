/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { UserUpdateOneRequiredWithoutEditionsNestedInputObjectSchema } from "./UserUpdateOneRequiredWithoutEditionsNestedInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.EditionUpdateWithoutPdfInput,
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
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutEditionsNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const EditionUpdateWithoutPdfInputObjectSchema = Schema
