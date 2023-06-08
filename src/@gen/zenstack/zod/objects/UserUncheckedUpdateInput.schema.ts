/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ArtistUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from "./ArtistUncheckedUpdateOneWithoutUserNestedInput.schema"
import { AuthorUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from "./AuthorUncheckedUpdateOneWithoutUserNestedInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { EditionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from "./EditionUncheckedUpdateManyWithoutUserNestedInput.schema"
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.UserUncheckedUpdateInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    email: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
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
    artist: z
      .lazy(() => ArtistUncheckedUpdateOneWithoutUserNestedInputObjectSchema)
      .optional(),
    author: z
      .lazy(() => AuthorUncheckedUpdateOneWithoutUserNestedInputObjectSchema)
      .optional(),
    editions: z
      .lazy(() => EditionUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const UserUncheckedUpdateInputObjectSchema = Schema
