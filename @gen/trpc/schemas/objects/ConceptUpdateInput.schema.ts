import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { ConceptTypeSchema } from '../enums/ConceptType.schema'
import { EnumConceptTypeFieldUpdateOperationsInputObjectSchema } from './EnumConceptTypeFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { UserUpdateOneWithoutConceptNestedInputObjectSchema } from './UserUpdateOneWithoutConceptNestedInput.schema'
import { PhotoUpdateManyWithoutConceptsNestedInputObjectSchema } from './PhotoUpdateManyWithoutConceptsNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ConceptUpdateInput> = z
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
    type: z
      .union([
        z.lazy(() => ConceptTypeSchema),
        z.lazy(() => EnumConceptTypeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
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
      .lazy(() => UserUpdateOneWithoutConceptNestedInputObjectSchema)
      .optional(),
    photos: z
      .lazy(() => PhotoUpdateManyWithoutConceptsNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const ConceptUpdateInputObjectSchema = Schema
