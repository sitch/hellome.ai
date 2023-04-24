import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { EditionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './EditionUncheckedUpdateManyWithoutUserNestedInput.schema'
import { ConceptUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './ConceptUncheckedUpdateOneWithoutUserNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
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
    updatedAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    Edition: z
      .lazy(() => EditionUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    Concept: z
      .lazy(() => ConceptUncheckedUpdateOneWithoutUserNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const UserUncheckedUpdateInputObjectSchema = Schema