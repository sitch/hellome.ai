/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema"
import { PageTextUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema } from "./PageTextUncheckedUpdateManyWithoutAuthorNestedInput.schema"
import { StoryUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema } from "./StoryUncheckedUpdateManyWithoutAuthorNestedInput.schema"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.AuthorUncheckedUpdateWithoutUserInput,
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
    stories: z
      .lazy(() => StoryUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema)
      .optional(),
    pageTexts: z
      .lazy(
        () => PageTextUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict()

export const AuthorUncheckedUpdateWithoutUserInputObjectSchema = Schema
